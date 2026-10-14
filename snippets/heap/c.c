/* Heap sort: build a max-heap, then repeatedly move the max to the end. */
static void sift_down(int *arr, int node, int n) {
    for (;;) {
        int child = 2 * node + 1;
        if (child >= n) return;
        if (child + 1 < n && arr[child] < arr[child + 1]) child++;
        if (arr[node] >= arr[child]) return;
        int t = arr[node]; arr[node] = arr[child]; arr[child] = t;
        node = child;
    }
}

void sort_array(int *arr, int n) {
    for (int node = n / 2 - 1; node >= 0; node--) sift_down(arr, node, n);
    for (int heap_end = n - 1; heap_end > 0; heap_end--) {
        int t = arr[0]; arr[0] = arr[heap_end]; arr[heap_end] = t;
        sift_down(arr, 0, heap_end);
    }
}
