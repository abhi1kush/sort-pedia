"""Insertion sort: grow a sorted prefix one element at a time."""


def sort_array(arr):
    for current in range(1, len(arr)):
        key, hole = arr[current], current
        while hole > 0 and key < arr[hole - 1]:
            arr[hole] = arr[hole - 1]
            hole -= 1
        arr[hole] = key
    return arr
