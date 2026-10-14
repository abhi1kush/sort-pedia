package main

// Top-down merge sort with one auxiliary buffer. Stable, O(n log n).

func mergeSort(a, tmp []int, lo, hi int) {
	if hi-lo < 2 {
		return
	}
	mid := lo + (hi-lo)/2
	mergeSort(a, tmp, lo, mid)
	mergeSort(a, tmp, mid, hi)
	i, j, k := lo, mid, lo
	for i < mid && j < hi {
		if a[j] < a[i] {
			tmp[k] = a[j]
			j++
		} else {
			tmp[k] = a[i]
			i++
		}
		k++
	}
	k += copy(tmp[k:], a[i:mid])
	copy(tmp[k:], a[j:hi])
	copy(a[lo:hi], tmp[lo:hi])
}

func sortArray(a []int) { mergeSort(a, make([]int, len(a)), 0, len(a)) }
