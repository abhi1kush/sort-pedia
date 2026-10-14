package main

// Selection sort: repeatedly select the minimum of the unsorted suffix.

func sortArray(a []int) {
	for i := 0; i+1 < len(a); i++ {
		m := i
		for j := i + 1; j < len(a); j++ {
			if a[j] < a[m] {
				m = j
			}
		}
		a[i], a[m] = a[m], a[i]
	}
}
