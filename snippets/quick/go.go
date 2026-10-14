package main

import "math/rand"

// 3-way (Dijkstra) quicksort with a random pivot: handles duplicates well.

func quick(arr []int, lo, hi int) {
	for lo < hi {
		pivotIndex := lo + rand.Intn(hi-lo+1)
		arr[lo], arr[pivotIndex] = arr[pivotIndex], arr[lo]
		pivot, lessEnd, i, greaterStart := arr[lo], lo, lo+1, hi
		for i <= greaterStart {
			if arr[i] < pivot {
				arr[lessEnd], arr[i] = arr[i], arr[lessEnd]
				lessEnd++
				i++
			} else if arr[i] > pivot {
				arr[i], arr[greaterStart] = arr[greaterStart], arr[i]
				greaterStart--
			} else {
				i++
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
