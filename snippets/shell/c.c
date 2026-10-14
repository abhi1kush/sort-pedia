/* Shell sort with the Ciura gap sequence (extended by x2.25). */
void sort_array(int *arr, int n) {
    int gaps[64] = {1, 4, 10, 23, 57, 132, 301, 701}, g = 8;
    while (gaps[g - 1] < n / 2 && g < 64) { gaps[g] = (int)(gaps[g - 1] * 2.25); g++; }
    for (int k = g - 1; k >= 0; k--) {
        int gap = gaps[k];
        for (int current = gap; current < n; current++) {
            int key = arr[current], hole = current;
            while (hole >= gap && key < arr[hole - gap]) { arr[hole] = arr[hole - gap]; hole -= gap; }
            arr[hole] = key;
        }
    }
}
