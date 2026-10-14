// Heap sort: build a max-heap, then repeatedly move the max to the end.
#include <utility>
#include <vector>

static void siftDown(std::vector<int>& arr, int node, int n) {
    for (;;) {
        int child = 2 * node + 1;
        if (child >= n) return;
        if (child + 1 < n && arr[child] < arr[child + 1]) child++;
        if (arr[node] >= arr[child]) return;
        std::swap(arr[node], arr[child]);
        node = child;
    }
}

void sortArray(std::vector<int>& arr) {
    int n = static_cast<int>(arr.size());
    for (int node = n / 2 - 1; node >= 0; node--) siftDown(arr, node, n);
    for (int heapEnd = n - 1; heapEnd > 0; heapEnd--) {
        std::swap(arr[0], arr[heapEnd]);
        siftDown(arr, 0, heapEnd);
    }
}
