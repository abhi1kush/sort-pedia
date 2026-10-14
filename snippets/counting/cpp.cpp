// Counting sort for integers in a known (small) range [min, max].
#include <algorithm>
#include <vector>

void sortArray(std::vector<int>& arr) {
    if (arr.size() < 2) return;
    auto [mnIt, mxIt] = std::minmax_element(arr.begin(), arr.end());
    long long mn = *mnIt, mx = *mxIt;
    std::vector<size_t> count(static_cast<size_t>(mx - mn + 1));
    for (int v : arr) count[v - mn]++;
    size_t writePos = 0;
    for (size_t v = 0; v < count.size(); v++)
        for (size_t c = 0; c < count[v]; c++) arr[writePos++] = static_cast<int>(v + mn);
}
