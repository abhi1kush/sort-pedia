// Cycle sort: rotate each permutation cycle into place (minimum writes).
class CycleSort {
    public static void sort(int[] arr) {
        int n = arr.length;
        for (int cycleStart = 0; cycleStart < n - 1; cycleStart++) {
            int item = arr[cycleStart], targetPos = cycleStart;
            for (int i = cycleStart + 1; i < n; i++) if (arr[i] < item) targetPos++;
            if (targetPos == cycleStart) continue;
            while (item == arr[targetPos]) targetPos++;
            int t = arr[targetPos]; arr[targetPos] = item; item = t;
            while (targetPos != cycleStart) {
                targetPos = cycleStart;
                for (int i = cycleStart + 1; i < n; i++) if (arr[i] < item) targetPos++;
                while (item == arr[targetPos]) targetPos++;
                if (item != arr[targetPos]) { t = arr[targetPos]; arr[targetPos] = item; item = t; }
            }
        }
    }
}
