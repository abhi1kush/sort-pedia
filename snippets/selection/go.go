package main

// Selection sort: repeatedly select the minimum of the unsorted suffix.

func sortArray(arr []int) {
	for fillPos := 0; fillPos+1 < len(arr); fillPos++ {
		minIndex := fillPos
		for i := fillPos + 1; i < len(arr); i++ {
			if arr[i] < arr[minIndex] {
				minIndex = i
			}
		}
		arr[fillPos], arr[minIndex] = arr[minIndex], arr[fillPos]
	}
}
