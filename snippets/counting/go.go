package main

// Counting sort for integers in a known (small) range [min, max].

func sortArray(a []int) {
	if len(a) < 2 {
		return
	}
	min, max := a[0], a[0]
	for _, v := range a {
		if v < min {
			min = v
		}
		if v > max {
			max = v
		}
	}
	count := make([]int, max-min+1)
	for _, v := range a {
		count[v-min]++
	}
	k := 0
	for v, c := range count {
		for ; c > 0; c-- {
			a[k] = v + min
			k++
		}
	}
}
