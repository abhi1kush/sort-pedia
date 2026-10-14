// Selection sort: repeatedly select the minimum of the unsorted suffix.
class SelectionSort {
    public static void sort(int[] arr) {
        for (int fillPos = 0; fillPos + 1 < arr.length; fillPos++) {
            int minIndex = fillPos;
            for (int scan = fillPos + 1; scan < arr.length; scan++) if (arr[scan] < arr[minIndex]) minIndex = scan;
            int t = arr[fillPos]; arr[fillPos] = arr[minIndex]; arr[minIndex] = t;
        }
    }
}
