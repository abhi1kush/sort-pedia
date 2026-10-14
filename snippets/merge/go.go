package main

// Top-down merge sort with one auxiliary buffer. Stable, O(n log n).

func mergeSort(arr, temp []int, lo, hi int) {
	if hi-lo < 2 {
		return
	}
	mid := lo + (hi-lo)/2
	mergeSort(arr, temp, lo, mid)
	mergeSort(arr, temp, mid, hi)
	leftPos, rightPos, writePos := lo, mid, lo
	for leftPos < mid && rightPos < hi {
		if arr[rightPos] < arr[leftPos] {
			temp[writePos] = arr[rightPos]
			rightPos++
		} else {
			temp[writePos] = arr[leftPos]
			leftPos++
		}
		writePos++
	}
	writePos += copy(temp[writePos:], arr[leftPos:mid])
	copy(temp[writePos:], arr[rightPos:hi])
	copy(arr[lo:hi], temp[lo:hi])
}

func sortArray(arr []int) { mergeSort(arr, make([]int, len(arr)), 0, len(arr)) }
