import java.util.ArrayList;
import java.util.List;

// Bucket sort: scatter into n buckets by value range, insertion-sort
// each bucket, then concatenate.
class BucketSort {
    public static void sort(int[] arr) {
        int n = arr.length;
        if (n < 2) return;
        long min = arr[0], max = arr[0];
        for (int v : arr) { min = Math.min(min, v); max = Math.max(max, v); }
        long range = max - min + 1;
        List<List<Integer>> buckets = new ArrayList<>();
        for (int i = 0; i < n; i++) buckets.add(new ArrayList<>());
        for (int v : arr) buckets.get((int) ((v - min) * n / range)).add(v);
        int writePos = 0;
        for (List<Integer> bucket : buckets) {
            for (int i = 1; i < bucket.size(); i++) {      // insertion sort
                int key = bucket.get(i), j = i;
                while (j > 0 && key < bucket.get(j - 1)) { bucket.set(j, bucket.get(j - 1)); j--; }
                bucket.set(j, key);
            }
            for (int v : bucket) arr[writePos++] = v;
        }
    }
}
