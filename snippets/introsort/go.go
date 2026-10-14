package main

// Introsort: median-of-three quicksort, heapsort fallback when recursion
// is too deep, insertion sort for small ranges.

func insertionRange(a []int, lo, hi int) {
	for i := lo + 1; i < hi; i++ {
		key, j := a[i], i
		for j > lo && key < a[j-1] {
			a[j] = a[j-1]
			j--
		}
		a[j] = key
	}
}

func sift(a []int, lo, root, n int) {
	for {
		child := 2*root + 1
		if child >= n {
			return
		}
		if child+1 < n && a[lo+child] < a[lo+child+1] {
			child++
		}
		if a[lo+root] >= a[lo+child] {
			return
		}
		a[lo+root], a[lo+child] = a[lo+child], a[lo+root]
		root = child
	}
}

func heapsortRange(a []int, lo, hi int) {
	n := hi - lo
	for i := n/2 - 1; i >= 0; i-- {
		sift(a, lo, i, n)
	}
	for end := n - 1; end > 0; end-- {
		a[lo], a[lo+end] = a[lo+end], a[lo]
		sift(a, lo, 0, end)
	}
}

func intro(a []int, lo, hi, depth int) {
	for hi-lo > 16 {
		if depth == 0 {
			heapsortRange(a, lo, hi)
			return
		}
		depth--
		mid, p := lo+(hi-lo)/2, hi-1
		if a[mid] < a[lo] {
			a[mid], a[lo] = a[lo], a[mid]
		}
		if a[p] < a[lo] {
			a[p], a[lo] = a[lo], a[p]
		}
		if a[mid] < a[p] { // median now at a[p]
			a[mid], a[p] = a[p], a[mid]
		}
		i := lo
		for j := lo; j < p; j++ {
			if a[j] < a[p] {
				a[i], a[j] = a[j], a[i]
				i++
			}
		}
		a[i], a[p] = a[p], a[i]
		if i-lo < hi-i-1 {
			intro(a, lo, i, depth)
			lo = i + 1
		} else {
			intro(a, i+1, hi, depth)
			hi = i
		}
	}
	insertionRange(a, lo, hi)
}

func sortArray(a []int) {
	depth := 0
	for m := len(a); m > 0; m >>= 1 {
		depth += 2
	}
	intro(a, 0, len(a), depth)
}
