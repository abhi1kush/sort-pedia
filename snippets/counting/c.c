/* Counting sort for integers in a known (small) range [min, max]. */
#include <stdlib.h>

void sort_array(int *arr, int n) {
    if (n < 2) return;
    int min = arr[0], max = arr[0];
    for (int i = 1; i < n; i++) { if (arr[i] < min) min = arr[i]; if (arr[i] > max) max = arr[i]; }
    size_t range = (size_t)((long long)max - min + 1);
    size_t *count = calloc(range, sizeof(size_t));
    for (int i = 0; i < n; i++) count[(long long)arr[i] - min]++;
    int write_pos = 0;
    for (size_t v = 0; v < range; v++)
        while (count[v]--) arr[write_pos++] = (int)((long long)v + min);
    free(count);
}
