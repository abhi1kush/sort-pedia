"""Comb sort: bubble sort over a shrinking gap (factor 1.3)."""


def sort_array(arr):
    gap, done = len(arr), False
    while not done:
        gap = int(gap / 1.3)
        if gap <= 1:
            gap, done = 1, True
        for left in range(len(arr) - gap):
            if arr[left + gap] < arr[left]:
                arr[left], arr[left + gap] = arr[left + gap], arr[left]
                done = False
    return arr
