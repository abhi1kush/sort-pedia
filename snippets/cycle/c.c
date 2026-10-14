/* Cycle sort: rotate each cycle of the permutation into place, writing
 * every element at most once (minimum number of memory writes). */
void sort_array(int *a, int n) {
    for (int start = 0; start < n - 1; start++) {
        int item = a[start], pos = start;
        for (int i = start + 1; i < n; i++) if (a[i] < item) pos++;
        if (pos == start) continue;
        while (item == a[pos]) pos++;
        int t = a[pos]; a[pos] = item; item = t;
        while (pos != start) {
            pos = start;
            for (int i = start + 1; i < n; i++) if (a[i] < item) pos++;
            while (item == a[pos]) pos++;
            if (item != a[pos]) { t = a[pos]; a[pos] = item; item = t; }
        }
    }
}
