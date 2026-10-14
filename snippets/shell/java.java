import java.util.ArrayList;
import java.util.List;

// Shell sort with the Ciura gap sequence (extended by x2.25).
class ShellSort {
    public static void sort(int[] arr) {
        int n = arr.length;
        List<Integer> gaps = new ArrayList<>(List.of(1, 4, 10, 23, 57, 132, 301, 701));
        while (gaps.get(gaps.size() - 1) < n / 2) gaps.add((int) (gaps.get(gaps.size() - 1) * 2.25));
        for (int g = gaps.size() - 1; g >= 0; g--) {
            int gap = gaps.get(g);
            for (int current = gap; current < n; current++) {
                int key = arr[current], hole = current;
                while (hole >= gap && key < arr[hole - gap]) { arr[hole] = arr[hole - gap]; hole -= gap; }
                arr[hole] = key;
            }
        }
    }
}
