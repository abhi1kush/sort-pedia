"""3-way (Dijkstra) quicksort with a random pivot: handles duplicates well."""
import random


def _quick(arr, lo, hi):
    while lo < hi:
        pivot_index = random.randint(lo, hi)
        arr[lo], arr[pivot_index] = arr[pivot_index], arr[lo]
        pivot, less_end, i, greater_start = arr[lo], lo, lo + 1, hi
        while i <= greater_start:
            if arr[i] < pivot:
                arr[less_end], arr[i] = arr[i], arr[less_end]
                less_end += 1
                i += 1
            elif arr[i] > pivot:
                arr[i], arr[greater_start] = arr[greater_start], arr[i]
                greater_start -= 1
            else:
                i += 1
        # recurse on the smaller part, loop on the larger one
        if less_end - lo < hi - greater_start:
            _quick(arr, lo, less_end - 1)
            lo = greater_start + 1
        else:
            _quick(arr, greater_start + 1, hi)
            hi = less_end - 1


def sort_array(arr):
    _quick(arr, 0, len(arr) - 1)
    return arr
