/* Cocktail shaker sort: bubble passes alternating left->right and right->left. */
void sort_array(int *a, int n) {
    int lo = 0, hi = n - 1, swapped = 1;
    while (swapped && lo < hi) {
        swapped = 0;
        for (int i = lo; i < hi; i++)
            if (a[i + 1] < a[i]) { int t = a[i]; a[i] = a[i + 1]; a[i + 1] = t; swapped = 1; }
        hi--;
        for (int i = hi; i > lo; i--)
            if (a[i] < a[i - 1]) { int t = a[i]; a[i] = a[i - 1]; a[i - 1] = t; swapped = 1; }
        lo++;
    }
}
