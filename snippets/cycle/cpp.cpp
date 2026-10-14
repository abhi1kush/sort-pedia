// Cycle sort: rotate each permutation cycle into place (minimum writes).
#include <utility>
#include <vector>

void sortArray(std::vector<int>& a) {
    size_t n = a.size();
    for (size_t start = 0; start + 1 < n; start++) {
        int item = a[start];
        size_t pos = start;
        for (size_t i = start + 1; i < n; i++) if (a[i] < item) pos++;
        if (pos == start) continue;
        while (item == a[pos]) pos++;
        std::swap(item, a[pos]);
        while (pos != start) {
            pos = start;
            for (size_t i = start + 1; i < n; i++) if (a[i] < item) pos++;
            while (item == a[pos]) pos++;
            if (item != a[pos]) std::swap(item, a[pos]);
        }
    }
}
