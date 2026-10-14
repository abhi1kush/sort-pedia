"""Cycle sort: rotate each permutation cycle into place (minimum writes)."""


def sort_array(arr):
    n = len(arr)
    for cycle_start in range(n - 1):
        item = arr[cycle_start]
        target_pos = cycle_start + sum(1 for x in arr[cycle_start + 1:] if x < item)
        if target_pos == cycle_start:
            continue
        while item == arr[target_pos]:
            target_pos += 1
        arr[target_pos], item = item, arr[target_pos]
        while target_pos != cycle_start:
            target_pos = cycle_start + sum(1 for x in arr[cycle_start + 1:] if x < item)
            while item == arr[target_pos]:
                target_pos += 1
            if item != arr[target_pos]:
                arr[target_pos], item = item, arr[target_pos]
    return arr
