/* Cocktail shaker sort: bubble passes alternating left->right and right->left. */
void sort_array(int *arr, int n) {
    int lo = 0, hi = n - 1, swapped = 1;
    while (swapped && lo < hi) {
        swapped = 0;
        for (int scan = lo; scan < hi; scan++)
            if (arr[scan + 1] < arr[scan]) { int t = arr[scan]; arr[scan] = arr[scan + 1]; arr[scan + 1] = t; swapped = 1; }
        hi--;
        for (int scan = hi; scan > lo; scan--)
            if (arr[scan] < arr[scan - 1]) { int t = arr[scan]; arr[scan] = arr[scan - 1]; arr[scan - 1] = t; swapped = 1; }
        lo++;
    }
}
