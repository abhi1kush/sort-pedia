package main

// Comb sort: bubble sort over a shrinking gap (factor 1.3).

func sortArray(arr []int) {
	gap, sorted := len(arr), false
	for !sorted {
		gap = int(float64(gap) / 1.3)
		if gap <= 1 {
			gap, sorted = 1, true
		}
		for left := 0; left+gap < len(arr); left++ {
			if arr[left+gap] < arr[left] {
				arr[left], arr[left+gap] = arr[left+gap], arr[left]
				sorted = false
			}
		}
	}
}
