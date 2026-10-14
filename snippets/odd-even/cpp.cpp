// Odd-even (brick) sort: alternate compare-swaps on odd and even pairs.
#include <utility>
#include <vector>

void sortArray(std::vector<int>& a) {
    bool sorted = false;
    while (!sorted) {
        sorted = true;
        for (size_t start : {1, 0})
            for (size_t i = start; i + 1 < a.size(); i += 2)
                if (a[i + 1] < a[i]) { std::swap(a[i], a[i + 1]); sorted = false; }
    }
}
