"""Bogo sort: shuffle until sorted. Expected O(n * n!) - tiny inputs only!"""
import random


def sort_array(arr):
    while any(arr[i] > arr[i + 1] for i in range(len(arr) - 1)):
        random.shuffle(arr)
    return arr
