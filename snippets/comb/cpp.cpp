// Comb sort: bubble sort over a shrinking gap (factor 1.3).
#include <utility>
#include <vector>

void sortArray(std::vector<int>& arr) {
    size_t n = arr.size(), gap = n;
    bool sorted = false;
    while (!sorted) {
        gap = static_cast<size_t>(gap / 1.3);
        if (gap <= 1) { gap = 1; sorted = true; }
        for (size_t left = 0; left + gap < n; left++)
            if (arr[left + gap] < arr[left]) { std::swap(arr[left], arr[left + gap]); sorted = false; }
    }
}
