"""3-way (Dijkstra) quicksort with a random pivot: handles duplicates well."""
import random


def _quick(arr, lo, hi):
    while lo < hi:
        pivot_index = random.randint(lo, hi)
        arr[lo], arr[pivot_index] = arr[pivot_index], arr[lo]
        pivot, less_end, scan, greater_start = arr[lo], lo, lo + 1, hi
        while scan <= greater_start:
            if arr[scan] < pivot:
                arr[less_end], arr[scan] = arr[scan], arr[less_end]
                less_end += 1
                scan += 1
            elif arr[scan] > pivot:
                arr[scan], arr[greater_start] = arr[greater_start], arr[scan]
                greater_start -= 1
            else:
                scan += 1
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
