/* 3-way (Dijkstra) quicksort with a random pivot: handles duplicates well. */
#include <stdlib.h>

static void swap(int *a, int i, int j) { int t = a[i]; a[i] = a[j]; a[j] = t; }

static void quick(int *a, int lo, int hi) {
    while (lo < hi) {
        swap(a, lo, lo + rand() % (hi - lo + 1));
        int v = a[lo], lt = lo, i = lo + 1, gt = hi;
        while (i <= gt) {
            if (a[i] < v) swap(a, lt++, i++);
            else if (a[i] > v) swap(a, i, gt--);
            else i++;
        }
        /* recurse on the smaller part, loop on the larger one */
        if (lt - lo < hi - gt) { quick(a, lo, lt - 1); lo = gt + 1; }
        else { quick(a, gt + 1, hi); hi = lt - 1; }
    }
}

void sort_array(int *a, int n) { quick(a, 0, n - 1); }
