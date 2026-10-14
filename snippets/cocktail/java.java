// Cocktail shaker sort: bubble passes in both directions.
class CocktailShakerSort {
    public static void sort(int[] a) {
        int lo = 0, hi = a.length - 1;
        boolean swapped = true;
        while (swapped && lo < hi) {
            swapped = false;
            for (int i = lo; i < hi; i++)
                if (a[i + 1] < a[i]) { int t = a[i]; a[i] = a[i + 1]; a[i + 1] = t; swapped = true; }
            hi--;
            for (int i = hi; i > lo; i--)
                if (a[i] < a[i - 1]) { int t = a[i]; a[i] = a[i - 1]; a[i - 1] = t; swapped = true; }
            lo++;
        }
    }
}
