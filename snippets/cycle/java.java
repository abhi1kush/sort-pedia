// Cycle sort: rotate each permutation cycle into place (minimum writes).
class CycleSort {
    public static void sort(int[] a) {
        int n = a.length;
        for (int start = 0; start < n - 1; start++) {
            int item = a[start], pos = start;
            for (int i = start + 1; i < n; i++) if (a[i] < item) pos++;
            if (pos == start) continue;
            while (item == a[pos]) pos++;
            int t = a[pos]; a[pos] = item; item = t;
            while (pos != start) {
                pos = start;
                for (int i = start + 1; i < n; i++) if (a[i] < item) pos++;
                while (item == a[pos]) pos++;
                if (item != a[pos]) { t = a[pos]; a[pos] = item; item = t; }
            }
        }
    }
}
