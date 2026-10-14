// Introsort: median-of-three quicksort, heapsort fallback when recursion
// is too deep, insertion sort for small ranges.
#include <utility>
#include <vector>

static void insertion(std::vector<int>& a, int lo, int hi) {
    for (int i = lo + 1; i < hi; i++) {
        int key = a[i], j = i;
        while (j > lo && key < a[j - 1]) { a[j] = a[j - 1]; j--; }
        a[j] = key;
    }
}

static void sift(std::vector<int>& a, int lo, int root, int n) {
    for (;;) {
        int child = 2 * root + 1;
        if (child >= n) return;
        if (child + 1 < n && a[lo + child] < a[lo + child + 1]) child++;
        if (a[lo + root] >= a[lo + child]) return;
        std::swap(a[lo + root], a[lo + child]);
        root = child;
    }
}

static void heapsortRange(std::vector<int>& a, int lo, int hi) {
    int n = hi - lo;
    for (int i = n / 2 - 1; i >= 0; i--) sift(a, lo, i, n);
    for (int end = n - 1; end > 0; end--) { std::swap(a[lo], a[lo + end]); sift(a, lo, 0, end); }
}

static void intro(std::vector<int>& a, int lo, int hi, int depth) {
    while (hi - lo > 16) {
        if (depth-- == 0) { heapsortRange(a, lo, hi); return; }
        int mid = lo + (hi - lo) / 2, p = hi - 1;
        if (a[mid] < a[lo]) std::swap(a[mid], a[lo]);
        if (a[p] < a[lo]) std::swap(a[p], a[lo]);
        if (a[mid] < a[p]) std::swap(a[mid], a[p]);  // median now at a[p]
        int i = lo;
        for (int j = lo; j < p; j++) if (a[j] < a[p]) std::swap(a[i++], a[j]);
        std::swap(a[i], a[p]);
        if (i - lo < hi - i - 1) { intro(a, lo, i, depth); lo = i + 1; }
        else { intro(a, i + 1, hi, depth); hi = i; }
    }
    insertion(a, lo, hi);
}

void sortArray(std::vector<int>& a) {
    int n = static_cast<int>(a.size()), depth = 0;
    for (int m = n; m > 0; m >>= 1) depth += 2;
    intro(a, 0, n, depth);
}
