/* Selection sort: repeatedly select the minimum of the unsorted suffix. */
void sort_array(int *arr, int n) {
    for (int fill_pos = 0; fill_pos + 1 < n; fill_pos++) {
        int min_index = fill_pos;
        for (int i = fill_pos + 1; i < n; i++) if (arr[i] < arr[min_index]) min_index = i;
        int t = arr[fill_pos]; arr[fill_pos] = arr[min_index]; arr[min_index] = t;
    }
}
