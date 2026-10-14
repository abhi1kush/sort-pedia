"""Introsort: median-of-three quicksort, heapsort fallback when recursion
is too deep, insertion sort for small ranges."""


def _insertion(a, lo, hi):
    for i in range(lo + 1, hi):
        key, j = a[i], i
        while j > lo and key < a[j - 1]:
            a[j] = a[j - 1]
            j -= 1
        a[j] = key


def _sift(a, lo, root, n):
    while True:
        child = 2 * root + 1
        if child >= n:
            return
        if child + 1 < n and a[lo + child] < a[lo + child + 1]:
            child += 1
        if a[lo + root] >= a[lo + child]:
            return
        a[lo + root], a[lo + child] = a[lo + child], a[lo + root]
        root = child


def _heapsort(a, lo, hi):
    n = hi - lo
    for i in range(n // 2 - 1, -1, -1):
        _sift(a, lo, i, n)
    for end in range(n - 1, 0, -1):
        a[lo], a[lo + end] = a[lo + end], a[lo]
        _sift(a, lo, 0, end)


def _intro(a, lo, hi, depth):
    while hi - lo > 16:
        if depth == 0:
            _heapsort(a, lo, hi)
            return
        depth -= 1
        mid, p = lo + (hi - lo) // 2, hi - 1
        if a[mid] < a[lo]:
            a[mid], a[lo] = a[lo], a[mid]
        if a[p] < a[lo]:
            a[p], a[lo] = a[lo], a[p]
        if a[mid] < a[p]:  # median now at a[p]
            a[mid], a[p] = a[p], a[mid]
        i = lo
        for j in range(lo, p):
            if a[j] < a[p]:
                a[i], a[j] = a[j], a[i]
                i += 1
        a[i], a[p] = a[p], a[i]
        if i - lo < hi - i - 1:
            _intro(a, lo, i, depth)
            lo = i + 1
        else:
            _intro(a, i + 1, hi, depth)
            hi = i
    _insertion(a, lo, hi)


def sort_array(a):
    _intro(a, 0, len(a), 2 * len(a).bit_length())
    return a
