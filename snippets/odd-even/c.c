/* Odd-even (brick) sort: alternate compare-swaps on odd and even pairs. */
void sort_array(int *arr, int n) {
    int sorted = 0;
    while (!sorted) {
        sorted = 1;
        for (int phase = 1; phase >= 0; phase--)
            for (int pair_start = phase; pair_start + 1 < n; pair_start += 2)
                if (arr[pair_start + 1] < arr[pair_start]) { int t = arr[pair_start]; arr[pair_start] = arr[pair_start + 1]; arr[pair_start + 1] = t; sorted = 0; }
    }
}
