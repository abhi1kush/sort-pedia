import java.util.Random;

// Bogo sort: shuffle until sorted. Expected O(n * n!) - tiny inputs only!
class BogoSort {
    static boolean isSorted(int[] arr) {
        for (int i = 1; i < arr.length; i++) if (arr[i] < arr[i - 1]) return false;
        return true;
    }

    public static void sort(int[] arr) {
        Random rnd = new Random();
        while (!isSorted(arr)) {
            for (int i = arr.length - 1; i > 0; i--) {   // Fisher-Yates shuffle
                int j = rnd.nextInt(i + 1);
                int t = arr[i]; arr[i] = arr[j]; arr[j] = t;
            }
        }
    }
}
