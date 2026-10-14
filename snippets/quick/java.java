import java.util.concurrent.ThreadLocalRandom;

// 3-way (Dijkstra) quicksort with a random pivot: handles duplicates well.
class QuickSort {
    static void swap(int[] arr, int i, int j) { int t = arr[i]; arr[i] = arr[j]; arr[j] = t; }

    static void quick(int[] arr, int lo, int hi) {
        while (lo < hi) {
            swap(arr, lo, ThreadLocalRandom.current().nextInt(lo, hi + 1));
            int pivot = arr[lo], lessEnd = lo, i = lo + 1, greaterStart = hi;
            while (i <= greaterStart) {
                if (arr[i] < pivot) swap(arr, lessEnd++, i++);
                else if (arr[i] > pivot) swap(arr, i, greaterStart--);
                else i++;
            }
            if (lessEnd - lo < hi - greaterStart) { quick(arr, lo, lessEnd - 1); lo = greaterStart + 1; }
            else { quick(arr, greaterStart + 1, hi); hi = lessEnd - 1; }
        }
    }

    public static void sort(int[] arr) { quick(arr, 0, arr.length - 1); }
}
