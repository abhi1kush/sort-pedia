// Bubble sort with early exit when a pass makes no swaps.
#include <utility>
#include <vector>

void sortArray(std::vector<int>& arr) {
    for (size_t sortedFrom = arr.size(); sortedFrom > 1; sortedFrom--) {
        bool swapped = false;
        for (size_t scan = 1; scan < sortedFrom; scan++)
            if (arr[scan] < arr[scan - 1]) { std::swap(arr[scan], arr[scan - 1]); swapped = true; }
        if (!swapped) break;
    }
}
