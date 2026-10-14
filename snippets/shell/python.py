"""Shell sort with the Ciura gap sequence (extended by x2.25)."""


def sort_array(arr):
    n = len(arr)
    gaps = [1, 4, 10, 23, 57, 132, 301, 701]
    while gaps[-1] < n // 2:
        gaps.append(int(gaps[-1] * 2.25))
    for gap in reversed(gaps):
        for current in range(gap, n):
            key, hole = arr[current], current
            while hole >= gap and key < arr[hole - gap]:
                arr[hole] = arr[hole - gap]
                hole -= gap
            arr[hole] = key
    return arr
