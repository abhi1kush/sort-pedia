/* Selection sort: repeatedly select the minimum of the unsorted suffix. */
void sort_array(int *a, int n) {
    for (int i = 0; i + 1 < n; i++) {
        int m = i;
        for (int j = i + 1; j < n; j++) if (a[j] < a[m]) m = j;
        int t = a[i]; a[i] = a[m]; a[m] = t;
    }
}
