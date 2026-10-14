// Introsort: median-of-three quicksort, heapsort fallback when recursion
// is too deep, insertion sort for small ranges.
class IntroSort {
    static void swap(int[] arr, int i, int j) { int t = arr[i]; arr[i] = arr[j]; arr[j] = t; }

    static void insertion(int[] arr, int lo, int hi) {
        for (int i = lo + 1; i < hi; i++) {
            int key = arr[i], j = i;
            while (j > lo && key < arr[j - 1]) { arr[j] = arr[j - 1]; j--; }
            arr[j] = key;
        }
    }

    static void sift(int[] arr, int lo, int root, int n) {
        while (true) {
            int child = 2 * root + 1;
            if (child >= n) return;
            if (child + 1 < n && arr[lo + child] < arr[lo + child + 1]) child++;
            if (arr[lo + root] >= arr[lo + child]) return;
            swap(arr, lo + root, lo + child);
            root = child;
        }
    }

    static void heapsort(int[] arr, int lo, int hi) {
        int n = hi - lo;
        for (int i = n / 2 - 1; i >= 0; i--) sift(arr, lo, i, n);
        for (int end = n - 1; end > 0; end--) { swap(arr, lo, lo + end); sift(arr, lo, 0, end); }
    }

    static void intro(int[] arr, int lo, int hi, int depth) {
        while (hi - lo > 16) {
            if (depth-- == 0) { heapsort(arr, lo, hi); return; }
            int mid = lo + (hi - lo) / 2, pivotPos = hi - 1;
            if (arr[mid] < arr[lo]) swap(arr, mid, lo);
            if (arr[pivotPos] < arr[lo]) swap(arr, pivotPos, lo);
            if (arr[mid] < arr[pivotPos]) swap(arr, mid, pivotPos);   // median now at arr[pivotPos]
            int storePos = lo;
            for (int scan = lo; scan < pivotPos; scan++) if (arr[scan] < arr[pivotPos]) swap(arr, storePos++, scan);
            swap(arr, storePos, pivotPos);
            if (storePos - lo < hi - storePos - 1) { intro(arr, lo, storePos, depth); lo = storePos + 1; }
            else { intro(arr, storePos + 1, hi, depth); hi = storePos; }
        }
        insertion(arr, lo, hi);
    }

    public static void sort(int[] arr) {
        int depth = 0;
        for (int m = arr.length; m > 0; m >>= 1) depth += 2;
        intro(arr, 0, arr.length, depth);
    }
}
