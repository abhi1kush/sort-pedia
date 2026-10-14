package main

// Shell sort with the Ciura gap sequence (extended by x2.25).

func sortArray(arr []int) {
	n := len(arr)
	gaps := []int{1, 4, 10, 23, 57, 132, 301, 701}
	for gaps[len(gaps)-1] < n/2 {
		gaps = append(gaps, int(float64(gaps[len(gaps)-1])*2.25))
	}
	for g := len(gaps) - 1; g >= 0; g-- {
		gap := gaps[g]
		for current := gap; current < n; current++ {
			key, hole := arr[current], current
			for hole >= gap && key < arr[hole-gap] {
				arr[hole] = arr[hole-gap]
				hole -= gap
			}
			arr[hole] = key
		}
	}
}
