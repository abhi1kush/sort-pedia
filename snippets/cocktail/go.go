package main

// Cocktail shaker sort: bubble passes in both directions.

func sortArray(arr []int) {
	lo, hi, swapped := 0, len(arr)-1, true
	for swapped && lo < hi {
		swapped = false
		for scan := lo; scan < hi; scan++ {
			if arr[scan+1] < arr[scan] {
				arr[scan], arr[scan+1] = arr[scan+1], arr[scan]
				swapped = true
			}
		}
		hi--
		for scan := hi; scan > lo; scan-- {
			if arr[scan] < arr[scan-1] {
				arr[scan], arr[scan-1] = arr[scan-1], arr[scan]
				swapped = true
			}
		}
		lo++
	}
}
