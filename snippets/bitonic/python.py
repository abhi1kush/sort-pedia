"""Bitonic sort generalised to any n."""


def _pow2_below(n):
    k = 1
    while k << 1 < n:
        k <<= 1
    return k


def _merge(arr, lo, n, up):
    if n <= 1:
        return
    distance = _pow2_below(n)
    for left in range(lo, lo + n - distance):
        if (arr[left] > arr[left + distance]) == up:
            arr[left], arr[left + distance] = arr[left + distance], arr[left]
    _merge(arr, lo, distance, up)
    _merge(arr, lo + distance, n - distance, up)


def _bitonic(arr, lo, n, up):
    if n <= 1:
        return
    half = n // 2
    _bitonic(arr, lo, half, not up)
    _bitonic(arr, lo + half, n - half, up)
    _merge(arr, lo, n, up)


def sort_array(arr):
    _bitonic(arr, 0, len(arr), True)
    return arr
