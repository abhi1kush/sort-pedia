/* Comb sort: bubble sort over a shrinking gap (factor 1.3). */
void sort_array(int *a, int n) {
    int gap = n, sorted = 0;
    while (!sorted) {
        gap = (int)(gap / 1.3);
        if (gap <= 1) { gap = 1; sorted = 1; }
        for (int i = 0; i + gap < n; i++)
            if (a[i + gap] < a[i]) {
                int t = a[i]; a[i] = a[i + gap]; a[i + gap] = t;
                sorted = 0;
            }
    }
}
