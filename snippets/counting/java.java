// Counting sort for integers in a known (small) range [min, max].
class CountingSort {
    public static void sort(int[] a) {
        if (a.length < 2) return;
        int min = a[0], max = a[0];
        for (int v : a) { min = Math.min(min, v); max = Math.max(max, v); }
        int[] count = new int[(int) ((long) max - min + 1)];
        for (int v : a) count[v - min]++;
        int k = 0;
        for (int v = 0; v < count.length; v++)
            for (int c = 0; c < count[v]; c++) a[k++] = v + min;
    }
}
