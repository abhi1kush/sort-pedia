// Comb sort: bubble sort over a shrinking gap (factor 1.3).
class CombSort {
    public static void sort(int[] arr) {
        int gap = arr.length;
        boolean sorted = false;
        while (!sorted) {
            gap = (int) (gap / 1.3);
            if (gap <= 1) { gap = 1; sorted = true; }
            for (int left = 0; left + gap < arr.length; left++)
                if (arr[left + gap] < arr[left]) {
                    int t = arr[left]; arr[left] = arr[left + gap]; arr[left + gap] = t;
                    sorted = false;
                }
        }
    }
}
