package main

// Bubble sort with early exit when a pass makes no swaps.

func sortArray(arr []int) {
	for sortedFrom := len(arr); sortedFrom > 1; sortedFrom-- {
		swapped := false
		for i := 1; i < sortedFrom; i++ {
			if arr[i] < arr[i-1] {
				arr[i], arr[i-1] = arr[i-1], arr[i]
				swapped = true
			}
		}
		if !swapped {
			break
		}
	}
}
