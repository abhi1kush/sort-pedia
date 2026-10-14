"""Top-down merge sort. Stable, O(n log n)."""


def _merge_sort(a, lo, hi):
    if hi - lo < 2:
        return
    mid = (lo + hi) // 2
    _merge_sort(a, lo, mid)
    _merge_sort(a, mid, hi)
    merged, i, j = [], lo, mid
    while i < mid and j < hi:
        if a[j] < a[i]:
            merged.append(a[j])
            j += 1
        else:
            merged.append(a[i])
            i += 1
    merged.extend(a[i:mid])
    merged.extend(a[j:hi])
    a[lo:hi] = merged


def sort_array(a):
    _merge_sort(a, 0, len(a))
    return a
