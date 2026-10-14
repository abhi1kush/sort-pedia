// Heap sort: build a max-heap, then repeatedly move the max to the end.
#include <utility>
#include <vector>

static void siftDown(std::vector<int>& a, int root, int n) {
    for (;;) {
        int child = 2 * root + 1;
        if (child >= n) return;
        if (child + 1 < n && a[child] < a[child + 1]) child++;
        if (a[root] >= a[child]) return;
        std::swap(a[root], a[child]);
        root = child;
    }
}

void sortArray(std::vector<int>& a) {
    int n = static_cast<int>(a.size());
    for (int i = n / 2 - 1; i >= 0; i--) siftDown(a, i, n);
    for (int end = n - 1; end > 0; end--) {
        std::swap(a[0], a[end]);
        siftDown(a, 0, end);
    }
}
