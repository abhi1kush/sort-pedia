package main

// Insertion sort: grow a sorted prefix one element at a time.

func sortArray(a []int) {
	for i := 1; i < len(a); i++ {
		key, j := a[i], i
		for j > 0 && key < a[j-1] {
			a[j] = a[j-1]
			j--
		}
		a[j] = key
	}
}
