// Introsort: median-of-three quicksort, heapsort fallback when recursion
// is too deep, insertion sort for small ranges.
#include <utility>
#include <vector>

static void insertion(std::vector<int>& arr, int lo, int hi) {
    for (int i = lo + 1; i < hi; i++) {
        int key = arr[i], j = i;
        while (j > lo && key < arr[j - 1]) { arr[j] = arr[j - 1]; j--; }
        arr[j] = key;
    }
}

static void sift(std::vector<int>& arr, int lo, int root, int n) {
    for (;;) {
        int child = 2 * root + 1;
        if (child >= n) return;
        if (child + 1 < n && arr[lo + child] < arr[lo + child + 1]) child++;
        if (arr[lo + root] >= arr[lo + child]) return;
        std::swap(arr[lo + root], arr[lo + child]);
        root = child;
    }
}

static void heapsortRange(std::vector<int>& arr, int lo, int hi) {
    int n = hi - lo;
    for (int i = n / 2 - 1; i >= 0; i--) sift(arr, lo, i, n);
    for (int end = n - 1; end > 0; end--) { std::swap(arr[lo], arr[lo + end]); sift(arr, lo, 0, end); }
}

static void intro(std::vector<int>& arr, int lo, int hi, int depth) {
    while (hi - lo > 16) {
        if (depth-- == 0) { heapsortRange(arr, lo, hi); return; }
        int mid = lo + (hi - lo) / 2, pivotPos = hi - 1;
        if (arr[mid] < arr[lo]) std::swap(arr[mid], arr[lo]);
        if (arr[pivotPos] < arr[lo]) std::swap(arr[pivotPos], arr[lo]);
        if (arr[mid] < arr[pivotPos]) std::swap(arr[mid], arr[pivotPos]);  // median now at arr[pivotPos]
        int storePos = lo;
        for (int i = lo; i < pivotPos; i++) if (arr[i] < arr[pivotPos]) std::swap(arr[storePos++], arr[i]);
        std::swap(arr[storePos], arr[pivotPos]);
        if (storePos - lo < hi - storePos - 1) { intro(arr, lo, storePos, depth); lo = storePos + 1; }
        else { intro(arr, storePos + 1, hi, depth); hi = storePos; }
    }
    insertion(arr, lo, hi);
}

void sortArray(std::vector<int>& arr) {
    int n = static_cast<int>(arr.size()), depth = 0;
    for (int m = n; m > 0; m >>= 1) depth += 2;
    intro(arr, 0, n, depth);
}
