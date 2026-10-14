// Insertion sort: grow a sorted prefix one element at a time.
class InsertionSort {
    public static void sort(int[] a) {
        for (int i = 1; i < a.length; i++) {
            int key = a[i], j = i;
            while (j > 0 && key < a[j - 1]) { a[j] = a[j - 1]; j--; }
            a[j] = key;
        }
    }
}
