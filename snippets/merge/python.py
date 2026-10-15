"""Top-down recursive merge sort on the inclusive range arr[lo..hi]. Stable, O(n log n)."""


def _merge(arr, lo, mid, hi):
    """Merge the sorted halves arr[lo..mid] and arr[mid+1..hi]."""
    merged, left_pos, right_pos = [], lo, mid + 1
    while left_pos <= mid and right_pos <= hi:
        if arr[right_pos] < arr[left_pos]:
            merged.append(arr[right_pos])
            right_pos += 1
        else:
            merged.append(arr[left_pos])
            left_pos += 1
    merged.extend(arr[left_pos:mid + 1])
    merged.extend(arr[right_pos:hi + 1])
    arr[lo:hi + 1] = merged


def _merge_sort(arr, lo, hi):
    if lo >= hi:  # zero or one element: already sorted
        return
    mid = lo + (hi - lo) // 2
    _merge_sort(arr, lo, mid)       # sort the left half
    _merge_sort(arr, mid + 1, hi)   # sort the right half
    _merge(arr, lo, mid, hi)        # merge the two sorted halves


def sort_array(arr):
    _merge_sort(arr, 0, len(arr) - 1)
    return arr
