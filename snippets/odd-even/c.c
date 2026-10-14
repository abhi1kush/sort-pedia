/* Odd-even (brick) sort: alternate compare-swaps on odd and even pairs. */
void sort_array(int *a, int n) {
    int sorted = 0;
    while (!sorted) {
        sorted = 1;
        for (int start = 1; start >= 0; start--)
            for (int i = start; i + 1 < n; i += 2)
                if (a[i + 1] < a[i]) { int t = a[i]; a[i] = a[i + 1]; a[i + 1] = t; sorted = 0; }
    }
}
