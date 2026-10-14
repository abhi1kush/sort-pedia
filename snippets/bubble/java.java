// Bubble sort with early exit when a pass makes no swaps.
class BubbleSort {
    public static void sort(int[] arr) {
        for (int sortedFrom = arr.length; sortedFrom > 1; sortedFrom--) {
            boolean swapped = false;
            for (int i = 1; i < sortedFrom; i++)
                if (arr[i] < arr[i - 1]) { int t = arr[i]; arr[i] = arr[i - 1]; arr[i - 1] = t; swapped = true; }
            if (!swapped) break;
        }
    }
}
