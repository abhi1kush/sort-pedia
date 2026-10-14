// Bubble sort with early exit when a pass makes no swaps.
#include <utility>
#include <vector>

void sortArray(std::vector<int>& arr) {
    for (size_t sortedFrom = arr.size(); sortedFrom > 1; sortedFrom--) {
        bool swapped = false;
        for (size_t i = 1; i < sortedFrom; i++)
            if (arr[i] < arr[i - 1]) { std::swap(arr[i], arr[i - 1]); swapped = true; }
        if (!swapped) break;
    }
}
