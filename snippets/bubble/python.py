"""Bubble sort with early exit when a pass makes no swaps."""


def sort_array(a):
    for end in range(len(a), 1, -1):
        swapped = False
        for i in range(1, end):
            if a[i] < a[i - 1]:
                a[i], a[i - 1] = a[i - 1], a[i]
                swapped = True
        if not swapped:
            break
    return a
