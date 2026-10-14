"""Selection sort: repeatedly select the minimum of the unsorted suffix."""


def sort_array(arr):
    n = len(arr)
    for fill_pos in range(n - 1):
        min_index = fill_pos
        for scan in range(fill_pos + 1, n):
            if arr[scan] < arr[min_index]:
                min_index = scan
        arr[fill_pos], arr[min_index] = arr[min_index], arr[fill_pos]
    return arr
