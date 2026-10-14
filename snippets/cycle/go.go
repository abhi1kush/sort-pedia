package main

// Cycle sort: rotate each permutation cycle into place (minimum writes).

func sortArray(arr []int) {
	n := len(arr)
	for cycleStart := 0; cycleStart < n-1; cycleStart++ {
		item, targetPos := arr[cycleStart], cycleStart
		for i := cycleStart + 1; i < n; i++ {
			if arr[i] < item {
				targetPos++
			}
		}
		if targetPos == cycleStart {
			continue
		}
		for item == arr[targetPos] {
			targetPos++
		}
		arr[targetPos], item = item, arr[targetPos]
		for targetPos != cycleStart {
			targetPos = cycleStart
			for i := cycleStart + 1; i < n; i++ {
				if arr[i] < item {
					targetPos++
				}
			}
			for item == arr[targetPos] {
				targetPos++
			}
			if item != arr[targetPos] {
				arr[targetPos], item = item, arr[targetPos]
			}
		}
	}
}
