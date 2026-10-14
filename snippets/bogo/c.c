/* Bogo sort: shuffle until sorted. Expected O(n * n!) - only for tiny n! */
#include <stdlib.h>

static int is_sorted(const int *arr, int n) {
    for (int i = 1; i < n; i++) if (arr[i] < arr[i - 1]) return 0;
    return 1;
}

void sort_array(int *arr, int n) {
    while (!is_sorted(arr, n)) {
        for (int i = n - 1; i > 0; i--) {      /* Fisher-Yates shuffle */
            int j = rand() % (i + 1);
            int t = arr[i]; arr[i] = arr[j]; arr[j] = t;
        }
    }
}
