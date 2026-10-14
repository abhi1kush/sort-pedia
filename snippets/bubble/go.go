package main

// Bubble sort with early exit when a pass makes no swaps.

func sortArray(arr []int) {
	for sortedFrom := len(arr); sortedFrom > 1; sortedFrom-- {
		swapped := false
		for scan := 1; scan < sortedFrom; scan++ {
			if arr[scan] < arr[scan-1] {
				arr[scan], arr[scan-1] = arr[scan-1], arr[scan]
				swapped = true
			}
		}
		if !swapped {
			break
		}
	}
}
