"""Cocktail shaker sort: bubble passes in both directions."""


def sort_array(a):
    lo, hi, swapped = 0, len(a) - 1, True
    while swapped and lo < hi:
        swapped = False
        for i in range(lo, hi):
            if a[i + 1] < a[i]:
                a[i], a[i + 1] = a[i + 1], a[i]
                swapped = True
        hi -= 1
        for i in range(hi, lo, -1):
            if a[i] < a[i - 1]:
                a[i], a[i - 1] = a[i - 1], a[i]
                swapped = True
        lo += 1
    return a
