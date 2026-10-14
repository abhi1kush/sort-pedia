package main

// Cycle sort: rotate each permutation cycle into place (minimum writes).

func sortArray(a []int) {
	n := len(a)
	for start := 0; start < n-1; start++ {
		item, pos := a[start], start
		for i := start + 1; i < n; i++ {
			if a[i] < item {
				pos++
			}
		}
		if pos == start {
			continue
		}
		for item == a[pos] {
			pos++
		}
		a[pos], item = item, a[pos]
		for pos != start {
			pos = start
			for i := start + 1; i < n; i++ {
				if a[i] < item {
					pos++
				}
			}
			for item == a[pos] {
				pos++
			}
			if item != a[pos] {
				a[pos], item = item, a[pos]
			}
		}
	}
}
