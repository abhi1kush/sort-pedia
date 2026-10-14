"""Cocktail shaker sort: bubble passes in both directions."""


def sort_array(arr):
    lo, hi, swapped = 0, len(arr) - 1, True
    while swapped and lo < hi:
        swapped = False
        for i in range(lo, hi):
            if arr[i + 1] < arr[i]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                swapped = True
        hi -= 1
        for i in range(hi, lo, -1):
            if arr[i] < arr[i - 1]:
                arr[i], arr[i - 1] = arr[i - 1], arr[i]
                swapped = True
        lo += 1
    return arr
