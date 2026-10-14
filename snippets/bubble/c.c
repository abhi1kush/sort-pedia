/* Bubble sort with early exit when a pass makes no swaps. */
void sort_array(int *arr, int n) {
    for (int sorted_from = n; sorted_from > 1; sorted_from--) {
        int swapped = 0;
        for (int scan = 1; scan < sorted_from; scan++)
            if (arr[scan] < arr[scan - 1]) { int t = arr[scan]; arr[scan] = arr[scan - 1]; arr[scan - 1] = t; swapped = 1; }
        if (!swapped) break;
    }
}
