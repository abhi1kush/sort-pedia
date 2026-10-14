/* Cocktail shaker sort: bubble passes alternating left->right and right->left. */
void sort_array(int *arr, int n) {
    int lo = 0, hi = n - 1, swapped = 1;
    while (swapped && lo < hi) {
        swapped = 0;
        for (int i = lo; i < hi; i++)
            if (arr[i + 1] < arr[i]) { int t = arr[i]; arr[i] = arr[i + 1]; arr[i + 1] = t; swapped = 1; }
        hi--;
        for (int i = hi; i > lo; i--)
            if (arr[i] < arr[i - 1]) { int t = arr[i]; arr[i] = arr[i - 1]; arr[i - 1] = t; swapped = 1; }
        lo++;
    }
}
