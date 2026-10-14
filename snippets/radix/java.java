// LSD radix sort, base 256, on the offset key (value - min) as a long.
class RadixSort {
    public static void sort(int[] arr) {
        int n = arr.length;
        if (n < 2) return;
        long min = arr[0];
        for (int v : arr) min = Math.min(min, v);
        long[] key = new long[n], output = new long[n];
        long max = 0;
        for (int i = 0; i < n; i++) { key[i] = arr[i] - min; max = Math.max(max, key[i]); }
        for (int shift = 0; shift < 40 && (max >> shift) > 0; shift += 8) {
            int[] count = new int[257];
            for (long k : key) count[(int) ((k >> shift) & 255) + 1]++;
            for (int d = 0; d < 256; d++) count[d + 1] += count[d];
            for (long k : key) output[count[(int) ((k >> shift) & 255)]++] = k;
            long[] t = key; key = output; output = t;
        }
        for (int i = 0; i < n; i++) arr[i] = (int) (key[i] + min);
    }
}
