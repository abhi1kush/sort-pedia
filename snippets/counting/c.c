/* Counting sort for integers in a known (small) range [min, max]. */
#include <stdlib.h>

void sort_array(int *a, int n) {
    if (n < 2) return;
    int min = a[0], max = a[0];
    for (int i = 1; i < n; i++) { if (a[i] < min) min = a[i]; if (a[i] > max) max = a[i]; }
    size_t range = (size_t)((long long)max - min + 1);
    size_t *count = calloc(range, sizeof(size_t));
    for (int i = 0; i < n; i++) count[(long long)a[i] - min]++;
    int k = 0;
    for (size_t v = 0; v < range; v++)
        while (count[v]--) a[k++] = (int)((long long)v + min);
    free(count);
}
