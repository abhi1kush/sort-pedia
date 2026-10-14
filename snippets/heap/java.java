// Heap sort: build a max-heap, then repeatedly move the max to the end.
class HeapSort {
    static void siftDown(int[] arr, int node, int n) {
        while (true) {
            int child = 2 * node + 1;
            if (child >= n) return;
            if (child + 1 < n && arr[child] < arr[child + 1]) child++;
            if (arr[node] >= arr[child]) return;
            int t = arr[node]; arr[node] = arr[child]; arr[child] = t;
            node = child;
        }
    }

    public static void sort(int[] arr) {
        int n = arr.length;
        for (int node = n / 2 - 1; node >= 0; node--) siftDown(arr, node, n);
        for (int heapEnd = n - 1; heapEnd > 0; heapEnd--) {
            int t = arr[0]; arr[0] = arr[heapEnd]; arr[heapEnd] = t;
            siftDown(arr, 0, heapEnd);
        }
    }
}
