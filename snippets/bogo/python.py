"""Bogo sort: shuffle until sorted. Expected O(n * n!) - tiny inputs only!"""
import random


def sort_array(a):
    while any(a[i] > a[i + 1] for i in range(len(a) - 1)):
        random.shuffle(a)
    return a
