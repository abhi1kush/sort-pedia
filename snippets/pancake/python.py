"""Pancake sort: flip the max to the front, then flip it to the end."""


def sort_array(arr):
    for unsorted_size in range(len(arr), 1, -1):
        max_index = max(range(unsorted_size), key=arr.__getitem__)
        if max_index != unsorted_size - 1:
            arr[:max_index + 1] = arr[:max_index + 1][::-1]  # flip max to the front
            arr[:unsorted_size] = arr[:unsorted_size][::-1]      # flip it to the end
    return arr
