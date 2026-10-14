"""Heap sort: build a max-heap, then repeatedly move the max to the end."""


def _sift_down(arr, node, n):
    while True:
        child = 2 * node + 1
        if child >= n:
            return
        if child + 1 < n and arr[child] < arr[child + 1]:
            child += 1
        if arr[node] >= arr[child]:
            return
        arr[node], arr[child] = arr[child], arr[node]
        node = child


def sort_array(arr):
    n = len(arr)
    for node in range(n // 2 - 1, -1, -1):
        _sift_down(arr, node, n)
    for heap_end in range(n - 1, 0, -1):
        arr[0], arr[heap_end] = arr[heap_end], arr[0]
        _sift_down(arr, 0, heap_end)
    return arr
