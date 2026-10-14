"""Bucket sort: scatter into n buckets by value range, insertion-sort
each bucket, then concatenate."""


def sort_array(a):
    n = len(a)
    if n < 2:
        return a
    lo = min(a)
    rng = max(a) - lo + 1
    buckets = [[] for _ in range(n)]
    for v in a:
        buckets[(v - lo) * n // rng].append(v)
    k = 0
    for b in buckets:
        for i in range(1, len(b)):  # insertion sort
            key, j = b[i], i
            while j > 0 and key < b[j - 1]:
                b[j] = b[j - 1]
                j -= 1
            b[j] = key
        a[k:k + len(b)] = b
        k += len(b)
    return a
