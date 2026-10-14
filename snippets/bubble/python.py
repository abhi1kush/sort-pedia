"""Bubble sort with early exit when a pass makes no swaps."""


def sort_array(arr):
    for sorted_from in range(len(arr), 1, -1):
        swapped = False
        for scan in range(1, sorted_from):
            if arr[scan] < arr[scan - 1]:
                arr[scan], arr[scan - 1] = arr[scan - 1], arr[scan]
                swapped = True
        if not swapped:
            break
    return arr
