/* Bitonic sort generalised to any n: sort halves in opposite directions,
 * then bitonic-merge using the greatest power of two below n. */
static int pow2_below(int n) { int k = 1; while ((k << 1) < n) k <<= 1; return k; }

static void bitonic_merge(int *a, int lo, int n, int up) {
    if (n <= 1) return;
    int m = pow2_below(n);
    for (int i = lo; i < lo + n - m; i++)
        if (up ? a[i] > a[i + m] : a[i] < a[i + m]) { int t = a[i]; a[i] = a[i + m]; a[i + m] = t; }
    bitonic_merge(a, lo, m, up);
    bitonic_merge(a, lo + m, n - m, up);
}

static void bitonic(int *a, int lo, int n, int up) {
    if (n <= 1) return;
    int m = n / 2;
    bitonic(a, lo, m, !up);
    bitonic(a, lo + m, n - m, up);
    bitonic_merge(a, lo, n, up);
}

void sort_array(int *a, int n) { bitonic(a, 0, n, 1); }
