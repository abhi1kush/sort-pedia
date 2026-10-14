package main

// Heap sort: build a max-heap, then repeatedly move the max to the end.

func siftDown(arr []int, node, n int) {
	for {
		child := 2*node + 1
		if child >= n {
			return
		}
		if child+1 < n && arr[child] < arr[child+1] {
			child++
		}
		if arr[node] >= arr[child] {
			return
		}
		arr[node], arr[child] = arr[child], arr[node]
		node = child
	}
}

func sortArray(arr []int) {
	n := len(arr)
	for node := n/2 - 1; node >= 0; node-- {
		siftDown(arr, node, n)
	}
	for heapEnd := n - 1; heapEnd > 0; heapEnd-- {
		arr[0], arr[heapEnd] = arr[heapEnd], arr[0]
		siftDown(arr, 0, heapEnd)
	}
}
