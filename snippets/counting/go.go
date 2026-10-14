package main

// Counting sort for integers in a known (small) range [min, max].

func sortArray(arr []int) {
	if len(arr) < 2 {
		return
	}
	min, max := arr[0], arr[0]
	for _, v := range arr {
		if v < min {
			min = v
		}
		if v > max {
			max = v
		}
	}
	count := make([]int, max-min+1)
	for _, v := range arr {
		count[v-min]++
	}
	writePos := 0
	for v, c := range count {
		for ; c > 0; c-- {
			arr[writePos] = v + min
			writePos++
		}
	}
}
