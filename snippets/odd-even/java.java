// Odd-even (brick) sort: alternate compare-swaps on odd and even pairs.
class OddEvenSort {
    public static void sort(int[] a) {
        boolean sorted = false;
        while (!sorted) {
            sorted = true;
            for (int start = 1; start >= 0; start--)
                for (int i = start; i + 1 < a.length; i += 2)
                    if (a[i + 1] < a[i]) { int t = a[i]; a[i] = a[i + 1]; a[i + 1] = t; sorted = false; }
        }
    }
}
