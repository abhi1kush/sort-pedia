/* Pancake sort: flip the maximum to the front, then flip it to the end. */
static void flip(int *arr, int k) {
    for (int i = 0; i < k; i++, k--) { int t = arr[i]; arr[i] = arr[k]; arr[k] = t; }
}

void sort_array(int *arr, int n) {
    for (int unsorted_size = n; unsorted_size > 1; unsorted_size--) {
        int max_index = 0;
        for (int i = 1; i < unsorted_size; i++) if (arr[i] > arr[max_index]) max_index = i;
        if (max_index != unsorted_size - 1) {
            flip(arr, max_index);
            flip(arr, unsorted_size - 1);
        }
    }
}
