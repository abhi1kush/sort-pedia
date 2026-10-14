// LSD radix sort, base 256, on the unsigned offset key (value - min).
#include <algorithm>
#include <array>
#include <cstdint>
#include <vector>

void sortArray(std::vector<int>& arr) {
    if (arr.size() < 2) return;
    long long mn = *std::min_element(arr.begin(), arr.end());
    std::vector<uint32_t> key(arr.size()), output(arr.size());
    uint32_t mx = 0;
    for (size_t i = 0; i < arr.size(); i++) {
        key[i] = static_cast<uint32_t>(arr[i] - mn);
        mx = std::max(mx, key[i]);
    }
    for (int shift = 0; shift < 32 && (mx >> shift) > 0; shift += 8) {
        std::array<size_t, 257> count{};
        for (uint32_t k : key) count[((k >> shift) & 255) + 1]++;
        for (int d = 0; d < 256; d++) count[d + 1] += count[d];
        for (uint32_t k : key) output[count[(k >> shift) & 255]++] = k;
        key.swap(output);
    }
    for (size_t i = 0; i < arr.size(); i++) arr[i] = static_cast<int>(key[i] + mn);
}
