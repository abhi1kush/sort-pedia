/* Shell sort with the Ciura gap sequence (extended by x2.25). */
void sort_array(int *a, int n) {
    int gaps[64] = {1, 4, 10, 23, 57, 132, 301, 701}, g = 8;
    while (gaps[g - 1] < n / 2 && g < 64) { gaps[g] = (int)(gaps[g - 1] * 2.25); g++; }
    for (int k = g - 1; k >= 0; k--) {
        int gap = gaps[k];
        for (int i = gap; i < n; i++) {
            int key = a[i], j = i;
            while (j >= gap && key < a[j - gap]) { a[j] = a[j - gap]; j -= gap; }
            a[j] = key;
        }
    }
}
