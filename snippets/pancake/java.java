// Pancake sort: flip the max to the front, then flip it to the end.
class PancakeSort {
    static void flip(int[] arr, int k) {
        for (int i = 0; i < k; i++, k--) { int t = arr[i]; arr[i] = arr[k]; arr[k] = t; }
    }

    public static void sort(int[] arr) {
        for (int unsortedSize = arr.length; unsortedSize > 1; unsortedSize--) {
            int maxIndex = 0;
            for (int scan = 1; scan < unsortedSize; scan++) if (arr[scan] > arr[maxIndex]) maxIndex = scan;
            if (maxIndex != unsortedSize - 1) {
                flip(arr, maxIndex);
                flip(arr, unsortedSize - 1);
            }
        }
    }
}
