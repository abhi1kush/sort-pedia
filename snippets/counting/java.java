// Counting sort for integers in a known (small) range [min, max].
class CountingSort {
    public static void sort(int[] arr) {
        if (arr.length < 2) return;
        int min = arr[0], max = arr[0];
        for (int v : arr) { min = Math.min(min, v); max = Math.max(max, v); }
        int[] count = new int[(int) ((long) max - min + 1)];
        for (int v : arr) count[v - min]++;
        int writePos = 0;
        for (int v = 0; v < count.length; v++)
            for (int c = 0; c < count[v]; c++) arr[writePos++] = v + min;
    }
}
