"""Cocktail shaker sort: bubble passes in both directions."""


def sort_array(arr):
    lo, hi, swapped = 0, len(arr) - 1, True
    while swapped and lo < hi:
        swapped = False
        for scan in range(lo, hi):
            if arr[scan + 1] < arr[scan]:
                arr[scan], arr[scan + 1] = arr[scan + 1], arr[scan]
                swapped = True
        hi -= 1
        for scan in range(hi, lo, -1):
            if arr[scan] < arr[scan - 1]:
                arr[scan], arr[scan - 1] = arr[scan - 1], arr[scan]
                swapped = True
        lo += 1
    return arr
