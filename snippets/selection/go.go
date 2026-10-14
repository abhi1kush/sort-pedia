package main

// Selection sort: repeatedly select the minimum of the unsorted suffix.

func sortArray(arr []int) {
	for fillPos := 0; fillPos+1 < len(arr); fillPos++ {
		minIndex := fillPos
		for scan := fillPos + 1; scan < len(arr); scan++ {
			if arr[scan] < arr[minIndex] {
				minIndex = scan
			}
		}
		arr[fillPos], arr[minIndex] = arr[minIndex], arr[fillPos]
	}
}
