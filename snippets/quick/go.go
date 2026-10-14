package main

import "math/rand"

// 3-way (Dijkstra) quicksort with a random pivot: handles duplicates well.

func quick(arr []int, lo, hi int) {
	for lo < hi {
		pivotIndex := lo + rand.Intn(hi-lo+1)
		arr[lo], arr[pivotIndex] = arr[pivotIndex], arr[lo]
		pivot, lessEnd, scan, greaterStart := arr[lo], lo, lo+1, hi
		for scan <= greaterStart {
			if arr[scan] < pivot {
				arr[lessEnd], arr[scan] = arr[scan], arr[lessEnd]
				lessEnd++
				scan++
			} else if arr[scan] > pivot {
				arr[scan], arr[greaterStart] = arr[greaterStart], arr[scan]
				greaterStart--
			} else {
				scan++
			}
		}
		if lessEnd-lo < hi-greaterStart {
			quick(arr, lo, lessEnd-1)
			lo = greaterStart + 1
		} else {
			quick(arr, greaterStart+1, hi)
			hi = lessEnd - 1
		}
	}
}

func sortArray(arr []int) { quick(arr, 0, len(arr)-1) }
