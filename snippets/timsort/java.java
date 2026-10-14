import java.util.ArrayList;
import java.util.List;

// Simplified Timsort: natural runs extended to MINRUN with binary
// insertion sort, merged via a stack that keeps run lengths balanced.
class TimSort {
    static int minRun(int n) {
        int r = 0;
        while (n >= 32) { r |= n & 1; n >>= 1; }
        return n + r;
    }

    static void mergeRuns(int[] a, int lo, int mid, int hi) {
        int[] tmp = java.util.Arrays.copyOfRange(a, lo, mid);
        int i = 0, j = mid, k = lo;
        while (i < tmp.length && j < hi) a[k++] = (a[j] < tmp[i]) ? a[j++] : tmp[i++];
        while (i < tmp.length) a[k++] = tmp[i++];
    }

    static void mergeAt(int[] a, List<int[]> runs, int i) {
        int[] x = runs.get(i), y = runs.get(i + 1);
        mergeRuns(a, x[0], x[0] + x[1], x[0] + x[1] + y[1]);
        x[1] += y[1];
        runs.remove(i + 1);
    }

    public static void sort(int[] a) {
        int n = a.length;
        if (n < 2) return;
        int minrun = minRun(n);
        List<int[]> runs = new ArrayList<>();   // {start, length}
        for (int lo = 0; lo < n; ) {
            int hi = lo + 1;
            if (hi < n) {
                if (a[hi] < a[lo]) {             // strictly descending: reverse
                    while (hi + 1 < n && a[hi + 1] < a[hi]) hi++;
                    for (int x = lo, y = hi; x < y; x++, y--) { int t = a[x]; a[x] = a[y]; a[y] = t; }
                } else {
                    while (hi + 1 < n && a[hi + 1] >= a[hi]) hi++;
                }
                hi++;
            }
            int end = Math.max(Math.min(n, lo + minrun), hi);
            for (int i = hi; i < end; i++) {      // binary insertion sort
                int key = a[i], l = lo, r = i;
                while (l < r) { int m = (l + r) >>> 1; if (key < a[m]) r = m; else l = m + 1; }
                System.arraycopy(a, l, a, l + 1, i - l);
                a[l] = key;
            }
            runs.add(new int[] {lo, end - lo});
            lo = end;
            while (runs.size() > 1) {
                int m = runs.size(), b = runs.get(m - 2)[1], c = runs.get(m - 1)[1];
                if ((m >= 3 && runs.get(m - 3)[1] <= b + c) || (m >= 4 && runs.get(m - 4)[1] <= runs.get(m - 3)[1] + b)) {
                    mergeAt(a, runs, runs.get(m - 3)[1] < c ? m - 3 : m - 2);
                } else if (b <= c) {
                    mergeAt(a, runs, m - 2);
                } else {
                    break;
                }
            }
        }
        while (runs.size() > 1) mergeAt(a, runs, runs.size() - 2);
    }
}
