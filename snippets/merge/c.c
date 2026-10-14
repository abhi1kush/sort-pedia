/* Top-down merge sort with one auxiliary buffer. Stable, O(n log n). */
#include <stdlib.h>

static void merge_sort(int *a, int *tmp, int lo, int hi) {
    if (hi - lo < 2) return;
    int mid = lo + (hi - lo) / 2;
    merge_sort(a, tmp, lo, mid);
    merge_sort(a, tmp, mid, hi);
    int i = lo, j = mid, k = lo;
    while (i < mid && j < hi) tmp[k++] = (a[j] < a[i]) ? a[j++] : a[i++];
    while (i < mid) tmp[k++] = a[i++];
    while (j < hi) tmp[k++] = a[j++];
    for (k = lo; k < hi; k++) a[k] = tmp[k];
}

void sort_array(int *a, int n) {
    if (n < 2) return;
    int *tmp = malloc(sizeof(int) * n);
    merge_sort(a, tmp, 0, n);
    free(tmp);
}
