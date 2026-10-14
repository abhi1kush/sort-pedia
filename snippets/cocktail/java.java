// Cocktail shaker sort: bubble passes in both directions.
class CocktailShakerSort {
    public static void sort(int[] arr) {
        int lo = 0, hi = arr.length - 1;
        boolean swapped = true;
        while (swapped && lo < hi) {
            swapped = false;
            for (int i = lo; i < hi; i++)
                if (arr[i + 1] < arr[i]) { int t = arr[i]; arr[i] = arr[i + 1]; arr[i + 1] = t; swapped = true; }
            hi--;
            for (int i = hi; i > lo; i--)
                if (arr[i] < arr[i - 1]) { int t = arr[i]; arr[i] = arr[i - 1]; arr[i - 1] = t; swapped = true; }
            lo++;
        }
    }
}
