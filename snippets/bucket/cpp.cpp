// Bucket sort: scatter into n buckets by value range, insertion-sort
// each bucket, then concatenate.
#include <algorithm>
#include <vector>

void sortArray(std::vector<int>& arr) {
    size_t n = arr.size();
    if (n < 2) return;
    auto [mnIt, mxIt] = std::minmax_element(arr.begin(), arr.end());
    long long mn = *mnIt, range = static_cast<long long>(*mxIt) - mn + 1;
    std::vector<std::vector<int>> buckets(n);
    for (int v : arr) buckets[static_cast<size_t>((v - mn) * static_cast<long long>(n) / range)].push_back(v);
    size_t writePos = 0;
    for (auto& bucket : buckets) {
        for (size_t i = 1; i < bucket.size(); i++) {  // insertion sort
            int key = bucket[i];
            size_t j = i;
            while (j > 0 && key < bucket[j - 1]) { bucket[j] = bucket[j - 1]; j--; }
            bucket[j] = key;
        }
        for (int v : bucket) arr[writePos++] = v;
    }
}
