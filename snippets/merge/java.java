// Top-down merge sort with one auxiliary buffer. Stable, O(n log n).
class MergeSort {
    static void mergeSort(int[] arr, int[] temp, int lo, int hi) {
        if (hi - lo < 2) return;
        int mid = (lo + hi) >>> 1;
        mergeSort(arr, temp, lo, mid);
        mergeSort(arr, temp, mid, hi);
        int leftPos = lo, rightPos = mid, writePos = lo;
        while (leftPos < mid && rightPos < hi) temp[writePos++] = (arr[rightPos] < arr[leftPos]) ? arr[rightPos++] : arr[leftPos++];
        while (leftPos < mid) temp[writePos++] = arr[leftPos++];
        while (rightPos < hi) temp[writePos++] = arr[rightPos++];
        System.arraycopy(temp, lo, arr, lo, hi - lo);
    }

    public static void sort(int[] arr) { mergeSort(arr, new int[arr.length], 0, arr.length); }
}
