import java.util.ArrayList;
import java.util.List;

// Shell sort with the Ciura gap sequence (extended by x2.25).
class ShellSort {
    public static void sort(int[] a) {
        int n = a.length;
        List<Integer> gaps = new ArrayList<>(List.of(1, 4, 10, 23, 57, 132, 301, 701));
        while (gaps.get(gaps.size() - 1) < n / 2) gaps.add((int) (gaps.get(gaps.size() - 1) * 2.25));
        for (int g = gaps.size() - 1; g >= 0; g--) {
            int gap = gaps.get(g);
            for (int i = gap; i < n; i++) {
                int key = a[i], j = i;
                while (j >= gap && key < a[j - gap]) { a[j] = a[j - gap]; j -= gap; }
                a[j] = key;
            }
        }
    }
}
