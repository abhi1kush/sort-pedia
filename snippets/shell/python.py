"""Shell sort with the Ciura gap sequence (extended by x2.25)."""


def sort_array(a):
    n = len(a)
    gaps = [1, 4, 10, 23, 57, 132, 301, 701]
    while gaps[-1] < n // 2:
        gaps.append(int(gaps[-1] * 2.25))
    for gap in reversed(gaps):
        for i in range(gap, n):
            key, j = a[i], i
            while j >= gap and key < a[j - gap]:
                a[j] = a[j - gap]
                j -= gap
            a[j] = key
    return a
