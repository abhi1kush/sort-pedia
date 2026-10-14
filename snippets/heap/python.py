"""Heap sort: build a max-heap, then repeatedly move the max to the end."""


def _sift_down(a, root, n):
    while True:
        child = 2 * root + 1
        if child >= n:
            return
        if child + 1 < n and a[child] < a[child + 1]:
            child += 1
        if a[root] >= a[child]:
            return
        a[root], a[child] = a[child], a[root]
        root = child


def sort_array(a):
    n = len(a)
    for i in range(n // 2 - 1, -1, -1):
        _sift_down(a, i, n)
    for end in range(n - 1, 0, -1):
        a[0], a[end] = a[end], a[0]
        _sift_down(a, 0, end)
    return a
