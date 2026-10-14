package main

// Odd-even (brick) sort: alternate compare-swaps on odd and even pairs.

func sortArray(arr []int) {
	sorted := false
	for !sorted {
		sorted = true
		for _, phase := range []int{1, 0} {
			for pairStart := phase; pairStart+1 < len(arr); pairStart += 2 {
				if arr[pairStart+1] < arr[pairStart] {
					arr[pairStart], arr[pairStart+1] = arr[pairStart+1], arr[pairStart]
					sorted = false
				}
			}
		}
	}
}
