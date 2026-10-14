"""Introsort: median-of-three quicksort, heapsort fallback when recursion
is too deep, insertion sort for small ranges."""


def _insertion(arr, lo, hi):
    for i in range(lo + 1, hi):
        key, j = arr[i], i
        while j > lo and key < arr[j - 1]:
            arr[j] = arr[j - 1]
            j -= 1
        arr[j] = key


def _sift(arr, lo, root, n):
    while True:
        child = 2 * root + 1
        if child >= n:
            return
        if child + 1 < n and arr[lo + child] < arr[lo + child + 1]:
            child += 1
        if arr[lo + root] >= arr[lo + child]:
            return
        arr[lo + root], arr[lo + child] = arr[lo + child], arr[lo + root]
        root = child


def _heapsort(arr, lo, hi):
    n = hi - lo
    for i in range(n // 2 - 1, -1, -1):
        _sift(arr, lo, i, n)
    for end in range(n - 1, 0, -1):
        arr[lo], arr[lo + end] = arr[lo + end], arr[lo]
        _sift(arr, lo, 0, end)


def _intro(arr, lo, hi, depth):
    while hi - lo > 16:
        if depth == 0:
            _heapsort(arr, lo, hi)
            return
        depth -= 1
        mid, pivot_pos = lo + (hi - lo) // 2, hi - 1
        if arr[mid] < arr[lo]:
            arr[mid], arr[lo] = arr[lo], arr[mid]
        if arr[pivot_pos] < arr[lo]:
            arr[pivot_pos], arr[lo] = arr[lo], arr[pivot_pos]
        if arr[mid] < arr[pivot_pos]:  # median now at arr[pivot_pos]
            arr[mid], arr[pivot_pos] = arr[pivot_pos], arr[mid]
        store_pos = lo
        for scan in range(lo, pivot_pos):
            if arr[scan] < arr[pivot_pos]:
                arr[store_pos], arr[scan] = arr[scan], arr[store_pos]
                store_pos += 1
        arr[store_pos], arr[pivot_pos] = arr[pivot_pos], arr[store_pos]
        if store_pos - lo < hi - store_pos - 1:
            _intro(arr, lo, store_pos, depth)
            lo = store_pos + 1
        else:
            _intro(arr, store_pos + 1, hi, depth)
            hi = store_pos
    _insertion(arr, lo, hi)


def sort_array(arr):
    _intro(arr, 0, len(arr), 2 * len(arr).bit_length())
    return arr
