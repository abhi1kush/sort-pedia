"""Simplified Timsort: natural runs extended to MIN_RUN with binary
insertion sort, merged via a stack that keeps run lengths balanced."""
from bisect import bisect_right


def _min_run(n):
    r = 0
    while n >= 32:
        r |= n & 1
        n >>= 1
    return n + r


def _merge(arr, lo, mid, hi):
    temp = arr[lo:mid]
    i, j, k = 0, mid, lo
    while i < len(temp) and j < hi:
        if arr[j] < temp[i]:
            arr[k] = arr[j]
            j += 1
        else:
            arr[k] = temp[i]
            i += 1
        k += 1
    arr[k:k + len(temp) - i] = temp[i:]


def sort_array(arr):
    n = len(arr)
    if n < 2:
        return arr
    min_run = _min_run(n)
    runs = []  # [start, length]

    def merge_at(i):
        s, l1 = runs[i]
        l2 = runs[i + 1][1]
        _merge(arr, s, s + l1, s + l1 + l2)
        runs[i] = [s, l1 + l2]
        del runs[i + 1]

    lo = 0
    while lo < n:
        hi = lo + 1
        if hi < n:
            if arr[hi] < arr[lo]:  # strictly descending: reverse
                while hi + 1 < n and arr[hi + 1] < arr[hi]:
                    hi += 1
                arr[lo:hi + 1] = arr[lo:hi + 1][::-1]
            else:
                while hi + 1 < n and arr[hi + 1] >= arr[hi]:
                    hi += 1
            hi += 1
        end = max(min(n, lo + min_run), hi)
        for i in range(hi, end):  # binary insertion sort
            key = arr[i]
            pos = bisect_right(arr, key, lo, i)
            arr[pos + 1:i + 1] = arr[pos:i]
            arr[pos] = key
        runs.append([lo, end - lo])
        lo = end
        while len(runs) > 1:
            m = len(runs)
            b, c = runs[m - 2][1], runs[m - 1][1]
            if (m >= 3 and runs[m - 3][1] <= b + c) or (m >= 4 and runs[m - 4][1] <= runs[m - 3][1] + b):
                merge_at(m - 3 if runs[m - 3][1] < c else m - 2)
            elif b <= c:
                merge_at(m - 2)
            else:
                break
    while len(runs) > 1:
        merge_at(len(runs) - 2)
    return arr
