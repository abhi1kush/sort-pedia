package main

// Introsort: median-of-three quicksort, heapsort fallback when recursion
// is too deep, insertion sort for small ranges.

func insertionRange(arr []int, lo, hi int) {
	for i := lo + 1; i < hi; i++ {
		key, j := arr[i], i
		for j > lo && key < arr[j-1] {
			arr[j] = arr[j-1]
			j--
		}
		arr[j] = key
	}
}

func sift(arr []int, lo, root, n int) {
	for {
		child := 2*root + 1
		if child >= n {
			return
		}
		if child+1 < n && arr[lo+child] < arr[lo+child+1] {
			child++
		}
		if arr[lo+root] >= arr[lo+child] {
			return
		}
		arr[lo+root], arr[lo+child] = arr[lo+child], arr[lo+root]
		root = child
	}
}

func heapsortRange(arr []int, lo, hi int) {
	n := hi - lo
	for i := n/2 - 1; i >= 0; i-- {
		sift(arr, lo, i, n)
	}
	for end := n - 1; end > 0; end-- {
		arr[lo], arr[lo+end] = arr[lo+end], arr[lo]
		sift(arr, lo, 0, end)
	}
}

func intro(arr []int, lo, hi, depth int) {
	for hi-lo > 16 {
		if depth == 0 {
			heapsortRange(arr, lo, hi)
			return
		}
		depth--
		mid, pivotPos := lo+(hi-lo)/2, hi-1
		if arr[mid] < arr[lo] {
			arr[mid], arr[lo] = arr[lo], arr[mid]
		}
		if arr[pivotPos] < arr[lo] {
			arr[pivotPos], arr[lo] = arr[lo], arr[pivotPos]
		}
		if arr[mid] < arr[pivotPos] { // median now at arr[pivotPos]
			arr[mid], arr[pivotPos] = arr[pivotPos], arr[mid]
		}
		storePos := lo
		for i := lo; i < pivotPos; i++ {
			if arr[i] < arr[pivotPos] {
				arr[storePos], arr[i] = arr[i], arr[storePos]
				storePos++
			}
		}
		arr[storePos], arr[pivotPos] = arr[pivotPos], arr[storePos]
		if storePos-lo < hi-storePos-1 {
			intro(arr, lo, storePos, depth)
			lo = storePos + 1
		} else {
			intro(arr, storePos+1, hi, depth)
			hi = storePos
		}
	}
	insertionRange(arr, lo, hi)
}

func sortArray(arr []int) {
	depth := 0
	for m := len(arr); m > 0; m >>= 1 {
		depth += 2
	}
	intro(arr, 0, len(arr), depth)
}
