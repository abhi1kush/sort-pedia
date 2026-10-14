/* Bucket sort: scatter values into n buckets by value range, sort each
 * bucket with insertion sort, then concatenate the buckets. */
#include <stdlib.h>

void sort_array(int *a, int n) {
    if (n < 2) return;
    int min = a[0], max = a[0];
    for (int i = 1; i < n; i++) { if (a[i] < min) min = a[i]; if (a[i] > max) max = a[i]; }
    long long range = (long long)max - min + 1;
    int *count = calloc(n + 1, sizeof(int)), *out = malloc(sizeof(int) * n);
    #define BUCKET(v) ((int)(((long long)(v) - min) * n / range))
    for (int i = 0; i < n; i++) count[BUCKET(a[i]) + 1]++;
    for (int b = 0; b < n; b++) count[b + 1] += count[b];       /* bucket start offsets */
    int *pos = malloc(sizeof(int) * n);
    for (int b = 0; b < n; b++) pos[b] = count[b];
    for (int i = 0; i < n; i++) out[pos[BUCKET(a[i])]++] = a[i];
    for (int b = 0; b < n; b++)                                 /* insertion sort each bucket */
        for (int i = count[b] + 1; i < count[b + 1]; i++) {
            int key = out[i], j = i;
            while (j > count[b] && key < out[j - 1]) { out[j] = out[j - 1]; j--; }
            out[j] = key;
        }
    for (int i = 0; i < n; i++) a[i] = out[i];
    #undef BUCKET
    free(count); free(out); free(pos);
}
