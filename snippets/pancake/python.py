"""Pancake sort: flip the max to the front, then flip it to the end."""


def sort_array(a):
    for size in range(len(a), 1, -1):
        mi = max(range(size), key=a.__getitem__)
        if mi != size - 1:
            a[:mi + 1] = a[:mi + 1][::-1]  # flip max to the front
            a[:size] = a[:size][::-1]      # flip it to the end
    return a
