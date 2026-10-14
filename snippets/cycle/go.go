package main

// Cycle sort: rotate each permutation cycle into place (minimum writes).

func sortArray(arr []int) {
	n := len(arr)
	for cycleStart := 0; cycleStart < n-1; cycleStart++ {
		item, targetPos := arr[cycleStart], cycleStart
		for scan := cycleStart + 1; scan < n; scan++ {
			if arr[scan] < item {
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
			for scan := cycleStart + 1; scan < n; scan++ {
				if arr[scan] < item {
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
