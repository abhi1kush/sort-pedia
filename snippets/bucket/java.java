import java.util.ArrayList;
import java.util.List;

// Bucket sort: scatter into n buckets by value range, insertion-sort
// each bucket, then concatenate.
class BucketSort {
    public static void sort(int[] a) {
        int n = a.length;
        if (n < 2) return;
        long min = a[0], max = a[0];
        for (int v : a) { min = Math.min(min, v); max = Math.max(max, v); }
        long range = max - min + 1;
        List<List<Integer>> buckets = new ArrayList<>();
        for (int i = 0; i < n; i++) buckets.add(new ArrayList<>());
        for (int v : a) buckets.get((int) ((v - min) * n / range)).add(v);
        int k = 0;
        for (List<Integer> b : buckets) {
            for (int i = 1; i < b.size(); i++) {      // insertion sort
                int key = b.get(i), j = i;
                while (j > 0 && key < b.get(j - 1)) { b.set(j, b.get(j - 1)); j--; }
                b.set(j, key);
            }
            for (int v : b) a[k++] = v;
        }
    }
}
