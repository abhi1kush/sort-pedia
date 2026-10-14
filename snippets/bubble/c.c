/* Bubble sort with early exit when a pass makes no swaps. */
void sort_array(int *a, int n) {
    for (int end = n; end > 1; end--) {
        int swapped = 0;
        for (int i = 1; i < end; i++)
            if (a[i] < a[i - 1]) { int t = a[i]; a[i] = a[i - 1]; a[i - 1] = t; swapped = 1; }
        if (!swapped) break;
    }
}
