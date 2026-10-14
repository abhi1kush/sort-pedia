// Heap sort: build a max-heap, then repeatedly move the max to the end.
class HeapSort {
    static void siftDown(int[] a, int root, int n) {
        while (true) {
            int child = 2 * root + 1;
            if (child >= n) return;
            if (child + 1 < n && a[child] < a[child + 1]) child++;
            if (a[root] >= a[child]) return;
            int t = a[root]; a[root] = a[child]; a[child] = t;
            root = child;
        }
    }

    public static void sort(int[] a) {
        int n = a.length;
        for (int i = n / 2 - 1; i >= 0; i--) siftDown(a, i, n);
        for (int end = n - 1; end > 0; end--) {
            int t = a[0]; a[0] = a[end]; a[end] = t;
            siftDown(a, 0, end);
        }
    }
}
