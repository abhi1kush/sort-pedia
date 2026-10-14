/* Selection sort: repeatedly select the minimum of the unsorted suffix. */
void sort_array(int *arr, int n) {
    for (int fill_pos = 0; fill_pos + 1 < n; fill_pos++) {
        int min_index = fill_pos;
        for (int scan = fill_pos + 1; scan < n; scan++) if (arr[scan] < arr[min_index]) min_index = scan;
        int t = arr[fill_pos]; arr[fill_pos] = arr[min_index]; arr[min_index] = t;
    }
}
