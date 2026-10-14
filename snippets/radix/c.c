/* LSD radix sort, base 256. Negative numbers are handled by sorting
 * the offset key (value - min) as an unsigned 32-bit number. */
#include <stdlib.h>
#include <string.h>

void sort_array(int *arr, int n) {
    if (n < 2) return;
    int min = arr[0];
    for (int i = 1; i < n; i++) if (arr[i] < min) min = arr[i];
    unsigned *key = malloc(sizeof(unsigned) * n), *output = malloc(sizeof(unsigned) * n), max = 0;
    for (int i = 0; i < n; i++) {
        key[i] = (unsigned)((long long)arr[i] - min);
        if (key[i] > max) max = key[i];
    }
    for (int shift = 0; shift < 32 && (max >> shift) > 0; shift += 8) {
        size_t count[257];
        memset(count, 0, sizeof count);
        for (int i = 0; i < n; i++) count[((key[i] >> shift) & 255) + 1]++;
        for (int d = 0; d < 256; d++) count[d + 1] += count[d];
        for (int i = 0; i < n; i++) output[count[(key[i] >> shift) & 255]++] = key[i];
        unsigned *t = key; key = output; output = t;
    }
    for (int i = 0; i < n; i++) arr[i] = (int)((long long)key[i] + min);
    free(key); free(output);
}
