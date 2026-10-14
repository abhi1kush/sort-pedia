// Bubble sort with early exit when a pass makes no swaps.
class BubbleSort {
    public static void sort(int[] arr) {
        for (int sortedFrom = arr.length; sortedFrom > 1; sortedFrom--) {
            boolean swapped = false;
            for (int scan = 1; scan < sortedFrom; scan++)
                if (arr[scan] < arr[scan - 1]) { int t = arr[scan]; arr[scan] = arr[scan - 1]; arr[scan - 1] = t; swapped = true; }
            if (!swapped) break;
        }
    }
}
