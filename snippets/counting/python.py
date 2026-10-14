"""Counting sort for integers in a known (small) range [min, max]."""


def sort_array(arr):
    if len(arr) < 2:
        return arr
    lo, hi = min(arr), max(arr)
    count = [0] * (hi - lo + 1)
    for v in arr:
        count[v - lo] += 1
    write_pos = 0
    for offset, c in enumerate(count):
        for _ in range(c):
            arr[write_pos] = offset + lo
            write_pos += 1
    return arr
