"""LSD radix sort, base 256, on the offset key (value - min)."""


def sort_array(arr):
    if len(arr) < 2:
        return arr
    lo = min(arr)
    keys = [v - lo for v in arr]
    max_key, shift = max(keys), 0
    while (max_key >> shift) > 0:
        buckets = [[] for _ in range(256)]
        for k in keys:
            buckets[(k >> shift) & 255].append(k)
        keys = [k for bucket in buckets for k in bucket]
        shift += 8
    arr[:] = [k + lo for k in keys]
    return arr
