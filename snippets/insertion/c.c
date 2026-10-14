/* Insertion sort: grow a sorted prefix by inserting one element at a time. */
void sort_array(int *arr, int n) {
    for (int current = 1; current < n; current++) {
        int key = arr[current], hole = current;
        while (hole > 0 && key < arr[hole - 1]) { arr[hole] = arr[hole - 1]; hole--; }
        arr[hole] = key;
    }
}
