"""Bucket sort: scatter into n buckets by value range, insertion-sort
each bucket, then concatenate."""


def sort_array(arr):
    n = len(arr)
    if n < 2:
        return arr
    lo = min(arr)
    rng = max(arr) - lo + 1
    buckets = [[] for _ in range(n)]
    for v in arr:
        buckets[(v - lo) * n // rng].append(v)
    write_pos = 0
    for bucket in buckets:
        for i in range(1, len(bucket)):  # insertion sort
            key, j = bucket[i], i
            while j > 0 and key < bucket[j - 1]:
                bucket[j] = bucket[j - 1]
                j -= 1
            bucket[j] = key
        arr[write_pos:write_pos + len(bucket)] = bucket
        write_pos += len(bucket)
    return arr
