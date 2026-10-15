package main

// Top-down recursive merge sort on the inclusive range arr[lo..hi]. Stable, O(n log n).

// merge combines the sorted halves arr[lo..mid] and arr[mid+1..hi] using the buffer temp.
func merge(arr, temp []int, lo, mid, hi int) {
	leftPos, rightPos, writePos := lo, mid+1, lo
	for leftPos <= mid && rightPos <= hi {
		if arr[rightPos] < arr[leftPos] {
			temp[writePos] = arr[rightPos]
			rightPos++
		} else {
			temp[writePos] = arr[leftPos]
			leftPos++
		}
		writePos++
	}
	writePos += copy(temp[writePos:], arr[leftPos:mid+1])
	copy(temp[writePos:], arr[rightPos:hi+1])
	copy(arr[lo:hi+1], temp[lo:hi+1])
}

func mergeSort(arr, temp []int, lo, hi int) {
	if lo >= hi { // zero or one element: already sorted
		return
	}
	mid := lo + (hi-lo)/2
	mergeSort(arr, temp, lo, mid)   // sort the left half
	mergeSort(arr, temp, mid+1, hi) // sort the right half
	merge(arr, temp, lo, mid, hi)   // merge the two sorted halves
}

func sortArray(arr []int) { mergeSort(arr, make([]int, len(arr)), 0, len(arr)-1) }
