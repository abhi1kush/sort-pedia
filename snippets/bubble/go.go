package main

// Bubble sort with early exit when a pass makes no swaps.

func sortArray(a []int) {
	for end := len(a); end > 1; end-- {
		swapped := false
		for i := 1; i < end; i++ {
			if a[i] < a[i-1] {
				a[i], a[i-1] = a[i-1], a[i]
				swapped = true
			}
		}
		if !swapped {
			break
		}
	}
}
