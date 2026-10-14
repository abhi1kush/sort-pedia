package main

// Insertion sort: grow a sorted prefix one element at a time.

func sortArray(arr []int) {
	for current := 1; current < len(arr); current++ {
		key, hole := arr[current], current
		for hole > 0 && key < arr[hole-1] {
			arr[hole] = arr[hole-1]
			hole--
		}
		arr[hole] = key
	}
}
