/* Comb sort: bubble sort over a shrinking gap (factor 1.3). */
void sort_array(int *arr, int n) {
    int gap = n, sorted = 0;
    while (!sorted) {
        gap = (int)(gap / 1.3);
        if (gap <= 1) { gap = 1; sorted = 1; }
        for (int left = 0; left + gap < n; left++)
            if (arr[left + gap] < arr[left]) {
                int t = arr[left]; arr[left] = arr[left + gap]; arr[left + gap] = t;
                sorted = 0;
            }
    }
}
