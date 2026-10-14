// Odd-even (brick) sort: alternate compare-swaps on odd and even pairs.
class OddEvenSort {
    public static void sort(int[] arr) {
        boolean sorted = false;
        while (!sorted) {
            sorted = true;
            for (int phase = 1; phase >= 0; phase--)
                for (int pairStart = phase; pairStart + 1 < arr.length; pairStart += 2)
                    if (arr[pairStart + 1] < arr[pairStart]) { int t = arr[pairStart]; arr[pairStart] = arr[pairStart + 1]; arr[pairStart + 1] = t; sorted = false; }
        }
    }
}
