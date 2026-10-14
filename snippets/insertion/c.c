/* Insertion sort: grow a sorted prefix by inserting one element at a time. */
void sort_array(int *a, int n) {
    for (int i = 1; i < n; i++) {
        int key = a[i], j = i;
        while (j > 0 && key < a[j - 1]) { a[j] = a[j - 1]; j--; }
        a[j] = key;
    }
}
