// Selection sort: repeatedly select the minimum of the unsorted suffix.
class SelectionSort {
    public static void sort(int[] arr) {
        for (int fillPos = 0; fillPos + 1 < arr.length; fillPos++) {
            int minIndex = fillPos;
            for (int i = fillPos + 1; i < arr.length; i++) if (arr[i] < arr[minIndex]) minIndex = i;
            int t = arr[fillPos]; arr[fillPos] = arr[minIndex]; arr[minIndex] = t;
        }
    }
}
