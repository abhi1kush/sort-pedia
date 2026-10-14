// Cycle sort: rotate each permutation cycle into place (minimum writes).
class CycleSort {
    public static void sort(int[] arr) {
        int n = arr.length;
        for (int cycleStart = 0; cycleStart < n - 1; cycleStart++) {
            int item = arr[cycleStart], targetPos = cycleStart;
            for (int scan = cycleStart + 1; scan < n; scan++) if (arr[scan] < item) targetPos++;
            if (targetPos == cycleStart) continue;
            while (item == arr[targetPos]) targetPos++;
            int t = arr[targetPos]; arr[targetPos] = item; item = t;
            while (targetPos != cycleStart) {
                targetPos = cycleStart;
                for (int scan = cycleStart + 1; scan < n; scan++) if (arr[scan] < item) targetPos++;
                while (item == arr[targetPos]) targetPos++;
                if (item != arr[targetPos]) { t = arr[targetPos]; arr[targetPos] = item; item = t; }
            }
        }
    }
}
