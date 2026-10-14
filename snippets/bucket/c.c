/* Bucket sort: scatter values into n buckets by value range, sort each
 * bucket with insertion sort, then concatenate the buckets. */
#include <stdlib.h>

void sort_array(int *arr, int n) {
    if (n < 2) return;
    int min = arr[0], max = arr[0];
    for (int i = 1; i < n; i++) { if (arr[i] < min) min = arr[i]; if (arr[i] > max) max = arr[i]; }
    long long range = (long long)max - min + 1;
    int *count = calloc(n + 1, sizeof(int)), *output = malloc(sizeof(int) * n);
    #define BUCKET(v) ((int)(((long long)(v) - min) * n / range))
    for (int i = 0; i < n; i++) count[BUCKET(arr[i]) + 1]++;
    for (int bucket = 0; bucket < n; bucket++) count[bucket + 1] += count[bucket];       /* bucket start offsets */
    int *pos = malloc(sizeof(int) * n);
    for (int bucket = 0; bucket < n; bucket++) pos[bucket] = count[bucket];
    for (int i = 0; i < n; i++) output[pos[BUCKET(arr[i])]++] = arr[i];
    for (int bucket = 0; bucket < n; bucket++)                                 /* insertion sort each bucket */
        for (int i = count[bucket] + 1; i < count[bucket + 1]; i++) {
            int key = output[i], j = i;
            while (j > count[bucket] && key < output[j - 1]) { output[j] = output[j - 1]; j--; }
            output[j] = key;
        }
    for (int i = 0; i < n; i++) arr[i] = output[i];
    #undef BUCKET
    free(count); free(output); free(pos);
}
