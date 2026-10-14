// Bubble sort with early exit when a pass makes no swaps.
class BubbleSort {
    public static void sort(int[] a) {
        for (int end = a.length; end > 1; end--) {
            boolean swapped = false;
            for (int i = 1; i < end; i++)
                if (a[i] < a[i - 1]) { int t = a[i]; a[i] = a[i - 1]; a[i - 1] = t; swapped = true; }
            if (!swapped) break;
        }
    }
}
