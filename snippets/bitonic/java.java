// Bitonic sort generalised to any n.
class BitonicSort {
    static int pow2Below(int n) { int k = 1; while ((k << 1) < n) k <<= 1; return k; }

    static void merge(int[] a, int lo, int n, boolean up) {
        if (n <= 1) return;
        int m = pow2Below(n);
        for (int i = lo; i < lo + n - m; i++)
            if (up ? a[i] > a[i + m] : a[i] < a[i + m]) { int t = a[i]; a[i] = a[i + m]; a[i + m] = t; }
        merge(a, lo, m, up);
        merge(a, lo + m, n - m, up);
    }

    static void bitonic(int[] a, int lo, int n, boolean up) {
        if (n <= 1) return;
        int m = n / 2;
        bitonic(a, lo, m, !up);
        bitonic(a, lo + m, n - m, up);
        merge(a, lo, n, up);
    }

    public static void sort(int[] a) { bitonic(a, 0, a.length, true); }
}
