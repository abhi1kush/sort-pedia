"""Odd-even (brick) sort: alternate compare-swaps on odd and even pairs."""


def sort_array(a):
    done = False
    while not done:
        done = True
        for start in (1, 0):
            for i in range(start, len(a) - 1, 2):
                if a[i + 1] < a[i]:
                    a[i], a[i + 1] = a[i + 1], a[i]
                    done = False
    return a
