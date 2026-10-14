package main

import "math/rand"

// 3-way (Dijkstra) quicksort with a random pivot: handles duplicates well.

func quick(a []int, lo, hi int) {
	for lo < hi {
		p := lo + rand.Intn(hi-lo+1)
		a[lo], a[p] = a[p], a[lo]
		v, lt, i, gt := a[lo], lo, lo+1, hi
		for i <= gt {
			if a[i] < v {
				a[lt], a[i] = a[i], a[lt]
				lt++
				i++
			} else if a[i] > v {
				a[i], a[gt] = a[gt], a[i]
				gt--
			} else {
				i++
			}
		}
		if lt-lo < hi-gt {
			quick(a, lo, lt-1)
			lo = gt + 1
		} else {
			quick(a, gt+1, hi)
			hi = lt - 1
		}
	}
}

func sortArray(a []int) { quick(a, 0, len(a)-1) }
