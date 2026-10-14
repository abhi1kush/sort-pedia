/* Bubble sort with early exit when a pass makes no swaps. */
void sort_array(int *arr, int n) {
    for (int sorted_from = n; sorted_from > 1; sorted_from--) {
        int swapped = 0;
        for (int i = 1; i < sorted_from; i++)
            if (arr[i] < arr[i - 1]) { int t = arr[i]; arr[i] = arr[i - 1]; arr[i - 1] = t; swapped = 1; }
        if (!swapped) break;
    }
}
