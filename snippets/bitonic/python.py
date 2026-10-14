"""Bitonic sort generalised to any n."""


def _pow2_below(n):
    k = 1
    while k << 1 < n:
        k <<= 1
    return k


def _merge(a, lo, n, up):
    if n <= 1:
        return
    m = _pow2_below(n)
    for i in range(lo, lo + n - m):
        if (a[i] > a[i + m]) == up:
            a[i], a[i + m] = a[i + m], a[i]
    _merge(a, lo, m, up)
    _merge(a, lo + m, n - m, up)


def _bitonic(a, lo, n, up):
    if n <= 1:
        return
    m = n // 2
    _bitonic(a, lo, m, not up)
    _bitonic(a, lo + m, n - m, up)
    _merge(a, lo, n, up)


def sort_array(a):
    _bitonic(a, 0, len(a), True)
    return a
