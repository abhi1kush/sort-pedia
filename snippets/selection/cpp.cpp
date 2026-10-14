// Selection sort: repeatedly select the minimum of the unsorted suffix.
#include <utility>
#include <vector>

void sortArray(std::vector<int>& a) {
    for (size_t i = 0; i + 1 < a.size(); i++) {
        size_t m = i;
        for (size_t j = i + 1; j < a.size(); j++) if (a[j] < a[m]) m = j;
        std::swap(a[i], a[m]);
    }
}
