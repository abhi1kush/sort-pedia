// Pancake sort: flip the max to the front, then flip it to the end.
class PancakeSort {
    static void flip(int[] a, int k) {
        for (int i = 0; i < k; i++, k--) { int t = a[i]; a[i] = a[k]; a[k] = t; }
    }

    public static void sort(int[] a) {
        for (int size = a.length; size > 1; size--) {
            int mi = 0;
            for (int i = 1; i < size; i++) if (a[i] > a[mi]) mi = i;
            if (mi != size - 1) {
                flip(a, mi);
                flip(a, size - 1);
            }
        }
    }
}
