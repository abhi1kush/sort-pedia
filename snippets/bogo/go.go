package main

import "math/rand"

// Bogo sort: shuffle until sorted. Expected O(n * n!) - tiny inputs only!

func isSorted(arr []int) bool {
	for i := 1; i < len(arr); i++ {
		if arr[i] < arr[i-1] {
			return false
		}
	}
	return true
}

func sortArray(arr []int) {
	for !isSorted(arr) {
		rand.Shuffle(len(arr), func(i, j int) { arr[i], arr[j] = arr[j], arr[i] })
	}
}
