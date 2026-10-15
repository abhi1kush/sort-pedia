// Top-down recursive merge sort on the inclusive range arr[lo..hi]. Stable, O(n log n).
#include <vector>

// Merge the sorted halves arr[lo..mid] and arr[mid+1..hi] using the buffer temp.
static void merge(std::vector<int>& arr, std::vector<int>& temp, int lo, int mid, int hi) {
    int leftPos = lo, rightPos = mid + 1, writePos = lo;
    while (leftPos <= mid && rightPos <= hi)
        temp[writePos++] = (arr[rightPos] < arr[leftPos]) ? arr[rightPos++] : arr[leftPos++];
    while (leftPos <= mid) temp[writePos++] = arr[leftPos++];
    while (rightPos <= hi) temp[writePos++] = arr[rightPos++];
    for (writePos = lo; writePos <= hi; writePos++) arr[writePos] = temp[writePos];
}

static void mergeSort(std::vector<int>& arr, std::vector<int>& temp, int lo, int hi) {
    if (lo >= hi) return;                // zero or one element: already sorted
    int mid = lo + (hi - lo) / 2;
    mergeSort(arr, temp, lo, mid);       // sort the left half
    mergeSort(arr, temp, mid + 1, hi);   // sort the right half
    merge(arr, temp, lo, mid, hi);       // merge the two sorted halves
}

void sortArray(std::vector<int>& arr) {
    std::vector<int> temp(arr.size());
    mergeSort(arr, temp, 0, static_cast<int>(arr.size()) - 1);
}
