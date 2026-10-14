// Shell sort with the Ciura gap sequence (extended by x2.25).
#include <vector>

void sortArray(std::vector<int>& a) {
    int n = static_cast<int>(a.size());
    std::vector<int> gaps = {1, 4, 10, 23, 57, 132, 301, 701};
    while (gaps.back() < n / 2) gaps.push_back(static_cast<int>(gaps.back() * 2.25));
    for (auto it = gaps.rbegin(); it != gaps.rend(); ++it) {
        int gap = *it;
        for (int i = gap; i < n; i++) {
            int key = a[i], j = i;
            while (j >= gap && key < a[j - gap]) { a[j] = a[j - gap]; j -= gap; }
            a[j] = key;
        }
    }
}
