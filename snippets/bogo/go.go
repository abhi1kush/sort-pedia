package main

import "math/rand"

// Bogo sort: shuffle until sorted. Expected O(n * n!) - tiny inputs only!

func isSorted(a []int) bool {
	for i := 1; i < len(a); i++ {
		if a[i] < a[i-1] {
			return false
		}
	}
	return true
}

func sortArray(a []int) {
	for !isSorted(a) {
		rand.Shuffle(len(a), func(i, j int) { a[i], a[j] = a[j], a[i] })
	}
}
