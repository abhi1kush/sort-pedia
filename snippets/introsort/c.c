/* Introsort: quicksort (median-of-three) that switches to heapsort when
 * recursion gets too deep and to insertion sort for small ranges. */
static void swap(int *arr, int i, int j) { int t = arr[i]; arr[i] = arr[j]; arr[j] = t; }

static void insertion(int *arr, int lo, int hi) {
    for (int i = lo + 1; i < hi; i++) {
        int key = arr[i], j = i;
        while (j > lo && key < arr[j - 1]) { arr[j] = arr[j - 1]; j--; }
        arr[j] = key;
    }
}

static void sift(int *arr, int lo, int root, int n) {
    for (;;) {
        int child = 2 * root + 1;
        if (child >= n) return;
        if (child + 1 < n && arr[lo + child] < arr[lo + child + 1]) child++;
        if (arr[lo + root] >= arr[lo + child]) return;
        swap(arr, lo + root, lo + child);
        root = child;
    }
}

static void heapsort_range(int *arr, int lo, int hi) {
    int n = hi - lo;
    for (int i = n / 2 - 1; i >= 0; i--) sift(arr, lo, i, n);
    for (int end = n - 1; end > 0; end--) { swap(arr, lo, lo + end); sift(arr, lo, 0, end); }
}

static void intro(int *arr, int lo, int hi, int depth) {
    while (hi - lo > 16) {
        if (depth-- == 0) { heapsort_range(arr, lo, hi); return; }
        int mid = lo + (hi - lo) / 2, pivot_pos = hi - 1;
        if (arr[mid] < arr[lo]) swap(arr, mid, lo);
        if (arr[pivot_pos] < arr[lo]) swap(arr, pivot_pos, lo);
        if (arr[mid] < arr[pivot_pos]) swap(arr, mid, pivot_pos);      /* median now at arr[pivot_pos] */
        int store_pos = lo;
        for (int scan = lo; scan < pivot_pos; scan++) if (arr[scan] < arr[pivot_pos]) swap(arr, store_pos++, scan);
        swap(arr, store_pos, pivot_pos);
        if (store_pos - lo < hi - store_pos - 1) { intro(arr, lo, store_pos, depth); lo = store_pos + 1; }
        else { intro(arr, store_pos + 1, hi, depth); hi = store_pos; }
    }
    insertion(arr, lo, hi);
}

void sort_array(int *arr, int n) {
    int depth = 0;
    for (int m = n; m > 0; m >>= 1) depth += 2;
    intro(arr, 0, n, depth);
}
