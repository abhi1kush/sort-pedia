// Counting sort for integers in a known (small) range [min, max].
#include <algorithm>
#include <vector>

void sortArray(std::vector<int>& a) {
    if (a.size() < 2) return;
    auto [mnIt, mxIt] = std::minmax_element(a.begin(), a.end());
    long long mn = *mnIt, mx = *mxIt;
    std::vector<size_t> count(static_cast<size_t>(mx - mn + 1));
    for (int v : a) count[v - mn]++;
    size_t k = 0;
    for (size_t v = 0; v < count.size(); v++)
        for (size_t c = 0; c < count[v]; c++) a[k++] = static_cast<int>(v + mn);
}
