package main

// Heap sort: build a max-heap, then repeatedly move the max to the end.

func siftDown(a []int, root, n int) {
	for {
		child := 2*root + 1
		if child >= n {
			return
		}
		if child+1 < n && a[child] < a[child+1] {
			child++
		}
		if a[root] >= a[child] {
			return
		}
		a[root], a[child] = a[child], a[root]
		root = child
	}
}

func sortArray(a []int) {
	n := len(a)
	for i := n/2 - 1; i >= 0; i-- {
		siftDown(a, i, n)
	}
	for end := n - 1; end > 0; end-- {
		a[0], a[end] = a[end], a[0]
		siftDown(a, 0, end)
	}
}
