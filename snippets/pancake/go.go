package main

// Pancake sort: flip the max to the front, then flip it to the end.

func flip(a []int, k int) {
	for i := 0; i < k; i, k = i+1, k-1 {
		a[i], a[k] = a[k], a[i]
	}
}

func sortArray(a []int) {
	for size := len(a); size > 1; size-- {
		mi := 0
		for i := 1; i < size; i++ {
			if a[i] > a[mi] {
				mi = i
			}
		}
		if mi != size-1 {
			flip(a, mi)
			flip(a, size-1)
		}
	}
}
