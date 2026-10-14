package main

// Shell sort with the Ciura gap sequence (extended by x2.25).

func sortArray(a []int) {
	n := len(a)
	gaps := []int{1, 4, 10, 23, 57, 132, 301, 701}
	for gaps[len(gaps)-1] < n/2 {
		gaps = append(gaps, int(float64(gaps[len(gaps)-1])*2.25))
	}
	for g := len(gaps) - 1; g >= 0; g-- {
		gap := gaps[g]
		for i := gap; i < n; i++ {
			key, j := a[i], i
			for j >= gap && key < a[j-gap] {
				a[j] = a[j-gap]
				j -= gap
			}
			a[j] = key
		}
	}
}
