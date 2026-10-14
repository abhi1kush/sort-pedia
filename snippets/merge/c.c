/* Top-down merge sort with one auxiliary buffer. Stable, O(n log n). */
#include <stdlib.h>

static void merge_sort(int *arr, int *temp, int lo, int hi) {
    if (hi - lo < 2) return;
    int mid = lo + (hi - lo) / 2;
    merge_sort(arr, temp, lo, mid);
    merge_sort(arr, temp, mid, hi);
    int left_pos = lo, right_pos = mid, write_pos = lo;
    while (left_pos < mid && right_pos < hi) temp[write_pos++] = (arr[right_pos] < arr[left_pos]) ? arr[right_pos++] : arr[left_pos++];
    while (left_pos < mid) temp[write_pos++] = arr[left_pos++];
    while (right_pos < hi) temp[write_pos++] = arr[right_pos++];
    for (write_pos = lo; write_pos < hi; write_pos++) arr[write_pos] = temp[write_pos];
}

void sort_array(int *arr, int n) {
    if (n < 2) return;
    int *temp = malloc(sizeof(int) * n);
    merge_sort(arr, temp, 0, n);
    free(temp);
}
