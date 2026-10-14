// Bitonic sort generalised to any n.
class BitonicSort {
    static int pow2Below(int n) { int k = 1; while ((k << 1) < n) k <<= 1; return k; }

    static void merge(int[] arr, int lo, int n, boolean up) {
        if (n <= 1) return;
        int distance = pow2Below(n);
        for (int left = lo; left < lo + n - distance; left++)
            if (up ? arr[left] > arr[left + distance] : arr[left] < arr[left + distance]) { int t = arr[left]; arr[left] = arr[left + distance]; arr[left + distance] = t; }
        merge(arr, lo, distance, up);
        merge(arr, lo + distance, n - distance, up);
    }

    static void bitonic(int[] arr, int lo, int n, boolean up) {
        if (n <= 1) return;
        int half = n / 2;
        bitonic(arr, lo, half, !up);
        bitonic(arr, lo + half, n - half, up);
        merge(arr, lo, n, up);
    }

    public static void sort(int[] arr) { bitonic(arr, 0, arr.length, true); }
}
