package main

// Pancake sort: flip the max to the front, then flip it to the end.

func flip(arr []int, k int) {
	for i := 0; i < k; i, k = i+1, k-1 {
		arr[i], arr[k] = arr[k], arr[i]
	}
}

func sortArray(arr []int) {
	for unsortedSize := len(arr); unsortedSize > 1; unsortedSize-- {
		maxIndex := 0
		for scan := 1; scan < unsortedSize; scan++ {
			if arr[scan] > arr[maxIndex] {
				maxIndex = scan
			}
		}
		if maxIndex != unsortedSize-1 {
			flip(arr, maxIndex)
			flip(arr, unsortedSize-1)
		}
	}
}
