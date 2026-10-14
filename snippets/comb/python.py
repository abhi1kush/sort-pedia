"""Comb sort: bubble sort over a shrinking gap (factor 1.3)."""


def sort_array(a):
    gap, done = len(a), False
    while not done:
        gap = int(gap / 1.3)
        if gap <= 1:
            gap, done = 1, True
        for i in range(len(a) - gap):
            if a[i + gap] < a[i]:
                a[i], a[i + gap] = a[i + gap], a[i]
                done = False
    return a
