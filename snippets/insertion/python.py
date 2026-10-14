"""Insertion sort: grow a sorted prefix one element at a time."""


def sort_array(a):
    for i in range(1, len(a)):
        key, j = a[i], i
        while j > 0 and key < a[j - 1]:
            a[j] = a[j - 1]
            j -= 1
        a[j] = key
    return a
