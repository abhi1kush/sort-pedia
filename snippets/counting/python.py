"""Counting sort for integers in a known (small) range [min, max]."""


def sort_array(a):
    if len(a) < 2:
        return a
    lo, hi = min(a), max(a)
    count = [0] * (hi - lo + 1)
    for v in a:
        count[v - lo] += 1
    k = 0
    for offset, c in enumerate(count):
        for _ in range(c):
            a[k] = offset + lo
            k += 1
    return a
