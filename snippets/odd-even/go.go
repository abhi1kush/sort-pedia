package main

// Odd-even (brick) sort: alternate compare-swaps on odd and even pairs.

func sortArray(a []int) {
	sorted := false
	for !sorted {
		sorted = true
		for _, start := range []int{1, 0} {
			for i := start; i+1 < len(a); i += 2 {
				if a[i+1] < a[i] {
					a[i], a[i+1] = a[i+1], a[i]
					sorted = false
				}
			}
		}
	}
}
