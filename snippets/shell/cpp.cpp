// Shell sort with the Ciura gap sequence (extended by x2.25).
#include <vector>

void sortArray(std::vector<int>& arr) {
    int n = static_cast<int>(arr.size());
    std::vector<int> gaps = {1, 4, 10, 23, 57, 132, 301, 701};
    while (gaps.back() < n / 2) gaps.push_back(static_cast<int>(gaps.back() * 2.25));
    for (auto it = gaps.rbegin(); it != gaps.rend(); ++it) {
        int gap = *it;
        for (int current = gap; current < n; current++) {
            int key = arr[current], hole = current;
            while (hole >= gap && key < arr[hole - gap]) { arr[hole] = arr[hole - gap]; hole -= gap; }
            arr[hole] = key;
        }
    }
}
