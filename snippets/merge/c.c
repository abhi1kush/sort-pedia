/* Top-down recursive merge sort on the inclusive range arr[lo..hi]. Stable, O(n log n). */
#include <stdlib.h>

/* Merge the sorted halves arr[lo..mid] and arr[mid+1..hi] using the buffer temp. */
static void merge(int *arr, int *temp, int lo, int mid, int hi) {
    int left_pos = lo, right_pos = mid + 1, write_pos = lo;
    while (left_pos <= mid && right_pos <= hi)
        temp[write_pos++] = (arr[right_pos] < arr[left_pos]) ? arr[right_pos++] : arr[left_pos++];
    while (left_pos <= mid) temp[write_pos++] = arr[left_pos++];
    while (right_pos <= hi) temp[write_pos++] = arr[right_pos++];
    for (write_pos = lo; write_pos <= hi; write_pos++) arr[write_pos] = temp[write_pos];
}

static void merge_sort(int *arr, int *temp, int lo, int hi) {
    if (lo >= hi) return;                 /* zero or one element: already sorted */
    int mid = lo + (hi - lo) / 2;
    merge_sort(arr, temp, lo, mid);       /* sort the left half */
    merge_sort(arr, temp, mid + 1, hi);   /* sort the right half */
    merge(arr, temp, lo, mid, hi);        /* merge the two sorted halves */
}

void sort_array(int *arr, int n) {
    if (n < 2) return;
    int *temp = malloc(sizeof(int) * n);
    merge_sort(arr, temp, 0, n - 1);
    free(temp);
}
