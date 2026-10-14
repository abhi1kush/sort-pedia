package main

// Cocktail shaker sort: bubble passes in both directions.

func sortArray(a []int) {
	lo, hi, swapped := 0, len(a)-1, true
	for swapped && lo < hi {
		swapped = false
		for i := lo; i < hi; i++ {
			if a[i+1] < a[i] {
				a[i], a[i+1] = a[i+1], a[i]
				swapped = true
			}
		}
		hi--
		for i := hi; i > lo; i-- {
			if a[i] < a[i-1] {
				a[i], a[i-1] = a[i-1], a[i]
				swapped = true
			}
		}
		lo++
	}
}
