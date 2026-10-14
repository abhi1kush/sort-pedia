"""Bubble sort with early exit when a pass makes no swaps."""


def sort_array(arr):
    for sorted_from in range(len(arr), 1, -1):
        swapped = False
        for i in range(1, sorted_from):
            if arr[i] < arr[i - 1]:
                arr[i], arr[i - 1] = arr[i - 1], arr[i]
                swapped = True
        if not swapped:
            break
    return arr
