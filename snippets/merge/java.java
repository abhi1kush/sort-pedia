// Top-down recursive merge sort on the inclusive range arr[lo..hi]. Stable, O(n log n).
class MergeSort {
    // Merge the sorted halves arr[lo..mid] and arr[mid+1..hi] using the buffer temp.
    static void merge(int[] arr, int[] temp, int lo, int mid, int hi) {
        int leftPos = lo, rightPos = mid + 1, writePos = lo;
        while (leftPos <= mid && rightPos <= hi)
            temp[writePos++] = (arr[rightPos] < arr[leftPos]) ? arr[rightPos++] : arr[leftPos++];
        while (leftPos <= mid) temp[writePos++] = arr[leftPos++];
        while (rightPos <= hi) temp[writePos++] = arr[rightPos++];
        System.arraycopy(temp, lo, arr, lo, hi - lo + 1);
    }

    static void mergeSort(int[] arr, int[] temp, int lo, int hi) {
        if (lo >= hi) return;                // zero or one element: already sorted
        int mid = lo + (hi - lo) / 2;
        mergeSort(arr, temp, lo, mid);       // sort the left half
        mergeSort(arr, temp, mid + 1, hi);   // sort the right half
        merge(arr, temp, lo, mid, hi);       // merge the two sorted halves
    }

    public static void sort(int[] arr) { mergeSort(arr, new int[arr.length], 0, arr.length - 1); }
}
