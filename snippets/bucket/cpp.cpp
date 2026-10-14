// Bucket sort: scatter into n buckets by value range, insertion-sort
// each bucket, then concatenate.
#include <algorithm>
#include <vector>

void sortArray(std::vector<int>& a) {
    size_t n = a.size();
    if (n < 2) return;
    auto [mnIt, mxIt] = std::minmax_element(a.begin(), a.end());
    long long mn = *mnIt, range = static_cast<long long>(*mxIt) - mn + 1;
    std::vector<std::vector<int>> buckets(n);
    for (int v : a) buckets[static_cast<size_t>((v - mn) * static_cast<long long>(n) / range)].push_back(v);
    size_t k = 0;
    for (auto& b : buckets) {
        for (size_t i = 1; i < b.size(); i++) {  // insertion sort
            int key = b[i];
            size_t j = i;
            while (j > 0 && key < b[j - 1]) { b[j] = b[j - 1]; j--; }
            b[j] = key;
        }
        for (int v : b) a[k++] = v;
    }
}
