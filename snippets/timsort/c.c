/* Simplified Timsort: natural runs extended to MINRUN with binary
 * insertion sort, then merged with a stack that keeps run lengths balanced. */
#include <stdlib.h>
#include <string.h>

static int min_run(int n) {
    int r = 0;
    while (n >= 32) { r |= n & 1; n >>= 1; }
    return n + r;
}

static void merge_runs(int *a, int lo, int mid, int hi) {
    int len = mid - lo;
    int *tmp = malloc(sizeof(int) * (len > 0 ? len : 1));
    memcpy(tmp, a + lo, sizeof(int) * len);
    int i = 0, j = mid, k = lo;
    while (i < len && j < hi) a[k++] = (a[j] < tmp[i]) ? a[j++] : tmp[i++];
    while (i < len) a[k++] = tmp[i++];
    free(tmp);
}

void sort_array(int *a, int n) {
    if (n < 2) return;
    int minrun = min_run(n);
    int *start = malloc(sizeof(int) * (n + 1)), *len = malloc(sizeof(int) * (n + 1));
    int top = 0, lo = 0;
    while (lo < n) {
        int hi = lo + 1;
        if (hi < n) {
            if (a[hi] < a[lo]) {               /* strictly descending run: reverse it */
                while (hi + 1 < n && a[hi + 1] < a[hi]) hi++;
                for (int x = lo, y = hi; x < y; x++, y--) { int t = a[x]; a[x] = a[y]; a[y] = t; }
            } else {
                while (hi + 1 < n && a[hi + 1] >= a[hi]) hi++;
            }
            hi++;
        }
        int end = lo + minrun < n ? lo + minrun : n;
        if (end < hi) end = hi;
        for (int i = hi; i < end; i++) {      /* binary insertion sort */
            int key = a[i], l = lo, r = i;
            while (l < r) { int m = (l + r) / 2; if (key < a[m]) r = m; else l = m + 1; }
            memmove(a + l + 1, a + l, sizeof(int) * (i - l));
            a[l] = key;
        }
        start[top] = lo; len[top] = end - lo; top++;
        lo = end;
        while (top > 1) {                     /* keep the run stack balanced */
            int b = len[top - 2], c = len[top - 1], at;
            if ((top >= 3 && len[top - 3] <= b + c) || (top >= 4 && len[top - 4] <= len[top - 3] + b))
                at = (len[top - 3] < c) ? top - 3 : top - 2;
            else if (b <= c) at = top - 2;
            else break;
            merge_runs(a, start[at], start[at] + len[at], start[at] + len[at] + len[at + 1]);
            len[at] += len[at + 1];
            for (int k = at + 1; k < top - 1; k++) { start[k] = start[k + 1]; len[k] = len[k + 1]; }
            top--;
        }
    }
    while (top > 1) {
        int at = top - 2;
        merge_runs(a, start[at], start[at] + len[at], start[at] + len[at] + len[at + 1]);
        len[at] += len[at + 1];
        top--;
    }
    free(start); free(len);
}
