// LSD radix sort, base 256, on the offset key (value - min) as a long.
class RadixSort {
    public static void sort(int[] a) {
        int n = a.length;
        if (n < 2) return;
        long min = a[0];
        for (int v : a) min = Math.min(min, v);
        long[] key = new long[n], out = new long[n];
        long max = 0;
        for (int i = 0; i < n; i++) { key[i] = a[i] - min; max = Math.max(max, key[i]); }
        for (int shift = 0; shift < 40 && (max >> shift) > 0; shift += 8) {
            int[] count = new int[257];
            for (long k : key) count[(int) ((k >> shift) & 255) + 1]++;
            for (int d = 0; d < 256; d++) count[d + 1] += count[d];
            for (long k : key) out[count[(int) ((k >> shift) & 255)]++] = k;
            long[] t = key; key = out; out = t;
        }
        for (int i = 0; i < n; i++) a[i] = (int) (key[i] + min);
    }
}
