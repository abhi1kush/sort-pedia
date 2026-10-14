// Selection sort: repeatedly select the minimum of the unsorted suffix.
#include <utility>
#include <vector>

void sortArray(std::vector<int>& arr) {
    for (size_t fillPos = 0; fillPos + 1 < arr.size(); fillPos++) {
        size_t minIndex = fillPos;
        for (size_t scan = fillPos + 1; scan < arr.size(); scan++) if (arr[scan] < arr[minIndex]) minIndex = scan;
        std::swap(arr[fillPos], arr[minIndex]);
    }
}
