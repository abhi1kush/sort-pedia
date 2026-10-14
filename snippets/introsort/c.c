/* Introsort: quicksort (median-of-three) that switches to heapsort when
 * recursion gets too deep and to insertion sort for small ranges. */
static void swap(int *a, int i, int j) { int t = a[i]; a[i] = a[j]; a[j] = t; }

static void insertion(int *a, int lo, int hi) {
    for (int i = lo + 1; i < hi; i++) {
        int key = a[i], j = i;
        while (j > lo && key < a[j - 1]) { a[j] = a[j - 1]; j--; }
        a[j] = key;
    }
}

static void sift(int *a, int lo, int root, int n) {
    for (;;) {
        int child = 2 * root + 1;
        if (child >= n) return;
        if (child + 1 < n && a[lo + child] < a[lo + child + 1]) child++;
        if (a[lo + root] >= a[lo + child]) return;
        swap(a, lo + root, lo + child);
        root = child;
    }
}

static void heapsort_range(int *a, int lo, int hi) {
    int n = hi - lo;
    for (int i = n / 2 - 1; i >= 0; i--) sift(a, lo, i, n);
    for (int end = n - 1; end > 0; end--) { swap(a, lo, lo + end); sift(a, lo, 0, end); }
}

static void intro(int *a, int lo, int hi, int depth) {
    while (hi - lo > 16) {
        if (depth-- == 0) { heapsort_range(a, lo, hi); return; }
        int mid = lo + (hi - lo) / 2, p = hi - 1;
        if (a[mid] < a[lo]) swap(a, mid, lo);
        if (a[p] < a[lo]) swap(a, p, lo);
        if (a[mid] < a[p]) swap(a, mid, p);      /* median now at a[p] */
        int i = lo;
        for (int j = lo; j < p; j++) if (a[j] < a[p]) swap(a, i++, j);
        swap(a, i, p);
        if (i - lo < hi - i - 1) { intro(a, lo, i, depth); lo = i + 1; }
        else { intro(a, i + 1, hi, depth); hi = i; }
    }
    insertion(a, lo, hi);
}

void sort_array(int *a, int n) {
    int depth = 0;
    for (int m = n; m > 0; m >>= 1) depth += 2;
    intro(a, 0, n, depth);
}
