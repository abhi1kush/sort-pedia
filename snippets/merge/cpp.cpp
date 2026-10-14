// Top-down merge sort with one auxiliary buffer. Stable, O(n log n).
#include <vector>

static void mergeSort(std::vector<int>& arr, std::vector<int>& temp, int lo, int hi) {
    if (hi - lo < 2) return;
    int mid = lo + (hi - lo) / 2;
    mergeSort(arr, temp, lo, mid);
    mergeSort(arr, temp, mid, hi);
    int leftPos = lo, rightPos = mid, writePos = lo;
    while (leftPos < mid && rightPos < hi) temp[writePos++] = (arr[rightPos] < arr[leftPos]) ? arr[rightPos++] : arr[leftPos++];
    while (leftPos < mid) temp[writePos++] = arr[leftPos++];
    while (rightPos < hi) temp[writePos++] = arr[rightPos++];
    for (writePos = lo; writePos < hi; writePos++) arr[writePos] = temp[writePos];
}

void sortArray(std::vector<int>& arr) {
    std::vector<int> temp(arr.size());
    mergeSort(arr, temp, 0, static_cast<int>(arr.size()));
}
