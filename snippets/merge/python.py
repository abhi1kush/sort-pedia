"""Top-down merge sort. Stable, O(n log n)."""


def _merge_sort(arr, lo, hi):
    if hi - lo < 2:
        return
    mid = (lo + hi) // 2
    _merge_sort(arr, lo, mid)
    _merge_sort(arr, mid, hi)
    merged, left_pos, right_pos = [], lo, mid
    while left_pos < mid and right_pos < hi:
        if arr[right_pos] < arr[left_pos]:
            merged.append(arr[right_pos])
            right_pos += 1
        else:
            merged.append(arr[left_pos])
            left_pos += 1
    merged.extend(arr[left_pos:mid])
    merged.extend(arr[right_pos:hi])
    arr[lo:hi] = merged


def sort_array(arr):
    _merge_sort(arr, 0, len(arr))
    return arr
