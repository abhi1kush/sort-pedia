package main

// Cocktail shaker sort: bubble passes in both directions.

func sortArray(arr []int) {
	lo, hi, swapped := 0, len(arr)-1, true
	for swapped && lo < hi {
		swapped = false
		for i := lo; i < hi; i++ {
			if arr[i+1] < arr[i] {
				arr[i], arr[i+1] = arr[i+1], arr[i]
				swapped = true
			}
		}
		hi--
		for i := hi; i > lo; i-- {
			if arr[i] < arr[i-1] {
				arr[i], arr[i-1] = arr[i-1], arr[i]
				swapped = true
			}
		}
		lo++
	}
}
