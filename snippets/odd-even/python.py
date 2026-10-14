"""Odd-even (brick) sort: alternate compare-swaps on odd and even pairs."""


def sort_array(arr):
    done = False
    while not done:
        done = True
        for phase in (1, 0):
            for pair_start in range(phase, len(arr) - 1, 2):
                if arr[pair_start + 1] < arr[pair_start]:
                    arr[pair_start], arr[pair_start + 1] = arr[pair_start + 1], arr[pair_start]
                    done = False
    return arr
