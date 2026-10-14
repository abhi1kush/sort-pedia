// Comb sort: bubble sort over a shrinking gap (factor 1.3).
#include <utility>
#include <vector>

void sortArray(std::vector<int>& a) {
    size_t n = a.size(), gap = n;
    bool sorted = false;
    while (!sorted) {
        gap = static_cast<size_t>(gap / 1.3);
        if (gap <= 1) { gap = 1; sorted = true; }
        for (size_t i = 0; i + gap < n; i++)
            if (a[i + gap] < a[i]) { std::swap(a[i], a[i + gap]); sorted = false; }
    }
}
