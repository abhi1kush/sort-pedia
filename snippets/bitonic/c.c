/* Bitonic sort generalised to any n: sort halves in opposite directions,
 * then bitonic-merge using the greatest power of two below n. */
static int pow2_below(int n) { int k = 1; while ((k << 1) < n) k <<= 1; return k; }

static void bitonic_merge(int *arr, int lo, int n, int up) {
    if (n <= 1) return;
    int distance = pow2_below(n);
    for (int left = lo; left < lo + n - distance; left++)
        if (up ? arr[left] > arr[left + distance] : arr[left] < arr[left + distance]) { int t = arr[left]; arr[left] = arr[left + distance]; arr[left + distance] = t; }
    bitonic_merge(arr, lo, distance, up);
    bitonic_merge(arr, lo + distance, n - distance, up);
}

static void bitonic(int *arr, int lo, int n, int up) {
    if (n <= 1) return;
    int half = n / 2;
    bitonic(arr, lo, half, !up);
    bitonic(arr, lo + half, n - half, up);
    bitonic_merge(arr, lo, n, up);
}

void sort_array(int *arr, int n) { bitonic(arr, 0, n, 1); }
