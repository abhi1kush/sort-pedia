"""3-way (Dijkstra) quicksort with a random pivot: handles duplicates well."""
import random


def _quick(a, lo, hi):
    while lo < hi:
        p = random.randint(lo, hi)
        a[lo], a[p] = a[p], a[lo]
        v, lt, i, gt = a[lo], lo, lo + 1, hi
        while i <= gt:
            if a[i] < v:
                a[lt], a[i] = a[i], a[lt]
                lt += 1
                i += 1
            elif a[i] > v:
                a[i], a[gt] = a[gt], a[i]
                gt -= 1
            else:
                i += 1
        # recurse on the smaller part, loop on the larger one
        if lt - lo < hi - gt:
            _quick(a, lo, lt - 1)
            lo = gt + 1
        else:
            _quick(a, gt + 1, hi)
            hi = lt - 1


def sort_array(a):
    _quick(a, 0, len(a) - 1)
    return a
