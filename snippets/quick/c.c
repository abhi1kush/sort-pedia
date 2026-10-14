/* 3-way (Dijkstra) quicksort with a random pivot: handles duplicates well. */
#include <stdlib.h>

static void swap(int *arr, int i, int j) { int t = arr[i]; arr[i] = arr[j]; arr[j] = t; }

static void quick(int *arr, int lo, int hi) {
    while (lo < hi) {
        swap(arr, lo, lo + rand() % (hi - lo + 1));
        int pivot = arr[lo], less_end = lo, scan = lo + 1, greater_start = hi;
        while (scan <= greater_start) {
            if (arr[scan] < pivot) swap(arr, less_end++, scan++);
            else if (arr[scan] > pivot) swap(arr, scan, greater_start--);
            else scan++;
        }
        /* recurse on the smaller part, loop on the larger one */
        if (less_end - lo < hi - greater_start) { quick(arr, lo, less_end - 1); lo = greater_start + 1; }
        else { quick(arr, greater_start + 1, hi); hi = less_end - 1; }
    }
}

void sort_array(int *arr, int n) { quick(arr, 0, n - 1); }
