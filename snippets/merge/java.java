// Top-down merge sort with one auxiliary buffer. Stable, O(n log n).
class MergeSort {
    static void mergeSort(int[] a, int[] tmp, int lo, int hi) {
        if (hi - lo < 2) return;
        int mid = (lo + hi) >>> 1;
        mergeSort(a, tmp, lo, mid);
        mergeSort(a, tmp, mid, hi);
        int i = lo, j = mid, k = lo;
        while (i < mid && j < hi) tmp[k++] = (a[j] < a[i]) ? a[j++] : a[i++];
        while (i < mid) tmp[k++] = a[i++];
        while (j < hi) tmp[k++] = a[j++];
        System.arraycopy(tmp, lo, a, lo, hi - lo);
    }

    public static void sort(int[] a) { mergeSort(a, new int[a.length], 0, a.length); }
}
