// Insertion sort: grow a sorted prefix one element at a time.
class InsertionSort {
    public static void sort(int[] arr) {
        for (int current = 1; current < arr.length; current++) {
            int key = arr[current], hole = current;
            while (hole > 0 && key < arr[hole - 1]) { arr[hole] = arr[hole - 1]; hole--; }
            arr[hole] = key;
        }
    }
}
