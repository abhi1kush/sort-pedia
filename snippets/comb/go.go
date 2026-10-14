package main

// Comb sort: bubble sort over a shrinking gap (factor 1.3).

func sortArray(a []int) {
	gap, sorted := len(a), false
	for !sorted {
		gap = int(float64(gap) / 1.3)
		if gap <= 1 {
			gap, sorted = 1, true
		}
		for i := 0; i+gap < len(a); i++ {
			if a[i+gap] < a[i] {
				a[i], a[i+gap] = a[i+gap], a[i]
				sorted = false
			}
		}
	}
}
