"""Cycle sort: rotate each permutation cycle into place (minimum writes)."""


def sort_array(a):
    n = len(a)
    for start in range(n - 1):
        item = a[start]
        pos = start + sum(1 for x in a[start + 1:] if x < item)
        if pos == start:
            continue
        while item == a[pos]:
            pos += 1
        a[pos], item = item, a[pos]
        while pos != start:
            pos = start + sum(1 for x in a[start + 1:] if x < item)
            while item == a[pos]:
                pos += 1
            if item != a[pos]:
                a[pos], item = item, a[pos]
    return a
