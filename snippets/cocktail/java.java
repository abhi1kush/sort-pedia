// Cocktail shaker sort: bubble passes in both directions.
class CocktailShakerSort {
    public static void sort(int[] arr) {
        int lo = 0, hi = arr.length - 1;
        boolean swapped = true;
        while (swapped && lo < hi) {
            swapped = false;
            for (int scan = lo; scan < hi; scan++)
                if (arr[scan + 1] < arr[scan]) { int t = arr[scan]; arr[scan] = arr[scan + 1]; arr[scan + 1] = t; swapped = true; }
            hi--;
            for (int scan = hi; scan > lo; scan--)
                if (arr[scan] < arr[scan - 1]) { int t = arr[scan]; arr[scan] = arr[scan - 1]; arr[scan - 1] = t; swapped = true; }
            lo++;
        }
    }
}
