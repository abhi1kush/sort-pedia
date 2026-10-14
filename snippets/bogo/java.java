import java.util.Random;

// Bogo sort: shuffle until sorted. Expected O(n * n!) - tiny inputs only!
class BogoSort {
    static boolean isSorted(int[] a) {
        for (int i = 1; i < a.length; i++) if (a[i] < a[i - 1]) return false;
        return true;
    }

    public static void sort(int[] a) {
        Random rnd = new Random();
        while (!isSorted(a)) {
            for (int i = a.length - 1; i > 0; i--) {   // Fisher-Yates shuffle
                int j = rnd.nextInt(i + 1);
                int t = a[i]; a[i] = a[j]; a[j] = t;
            }
        }
    }
}
