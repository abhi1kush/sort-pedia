import java.util.concurrent.ThreadLocalRandom;

// 3-way (Dijkstra) quicksort with a random pivot: handles duplicates well.
class QuickSort {
    static void swap(int[] a, int i, int j) { int t = a[i]; a[i] = a[j]; a[j] = t; }

    static void quick(int[] a, int lo, int hi) {
        while (lo < hi) {
            swap(a, lo, ThreadLocalRandom.current().nextInt(lo, hi + 1));
            int v = a[lo], lt = lo, i = lo + 1, gt = hi;
            while (i <= gt) {
                if (a[i] < v) swap(a, lt++, i++);
                else if (a[i] > v) swap(a, i, gt--);
                else i++;
            }
            if (lt - lo < hi - gt) { quick(a, lo, lt - 1); lo = gt + 1; }
            else { quick(a, gt + 1, hi); hi = lt - 1; }
        }
    }

    public static void sort(int[] a) { quick(a, 0, a.length - 1); }
}
