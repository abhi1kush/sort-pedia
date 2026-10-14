// Bubble sort with early exit when a pass makes no swaps.
#include <utility>
#include <vector>

void sortArray(std::vector<int>& a) {
    for (size_t end = a.size(); end > 1; end--) {
        bool swapped = false;
        for (size_t i = 1; i < end; i++)
            if (a[i] < a[i - 1]) { std::swap(a[i], a[i - 1]); swapped = true; }
        if (!swapped) break;
    }
}
