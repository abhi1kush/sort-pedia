// Comb sort: bubble sort over a shrinking gap (factor 1.3).
class CombSort {
    public static void sort(int[] a) {
        int gap = a.length;
        boolean sorted = false;
        while (!sorted) {
            gap = (int) (gap / 1.3);
            if (gap <= 1) { gap = 1; sorted = true; }
            for (int i = 0; i + gap < a.length; i++)
                if (a[i + gap] < a[i]) {
                    int t = a[i]; a[i] = a[i + gap]; a[i + gap] = t;
                    sorted = false;
                }
        }
    }
}
