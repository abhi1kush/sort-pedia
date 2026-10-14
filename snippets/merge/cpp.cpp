// Top-down merge sort with one auxiliary buffer. Stable, O(n log n).
#include <vector>

static void mergeSort(std::vector<int>& a, std::vector<int>& tmp, int lo, int hi) {
    if (hi - lo < 2) return;
    int mid = lo + (hi - lo) / 2;
    mergeSort(a, tmp, lo, mid);
    mergeSort(a, tmp, mid, hi);
    int i = lo, j = mid, k = lo;
    while (i < mid && j < hi) tmp[k++] = (a[j] < a[i]) ? a[j++] : a[i++];
    while (i < mid) tmp[k++] = a[i++];
    while (j < hi) tmp[k++] = a[j++];
    for (k = lo; k < hi; k++) a[k] = tmp[k];
}

void sortArray(std::vector<int>& a) {
    std::vector<int> tmp(a.size());
    mergeSort(a, tmp, 0, static_cast<int>(a.size()));
}
