"""LSD radix sort, base 256, on the offset key (value - min)."""


def sort_array(a):
    if len(a) < 2:
        return a
    lo = min(a)
    keys = [v - lo for v in a]
    max_key, shift = max(keys), 0
    while (max_key >> shift) > 0:
        buckets = [[] for _ in range(256)]
        for k in keys:
            buckets[(k >> shift) & 255].append(k)
        keys = [k for b in buckets for k in b]
        shift += 8
    a[:] = [k + lo for k in keys]
    return a
