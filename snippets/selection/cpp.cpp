// Selection sort: repeatedly select the minimum of the unsorted suffix.
#include <utility>
#include <vector>

void sortArray(std::vector<int>& arr) {
    for (size_t fillPos = 0; fillPos + 1 < arr.size(); fillPos++) {
        size_t minIndex = fillPos;
        for (size_t i = fillPos + 1; i < arr.size(); i++) if (arr[i] < arr[minIndex]) minIndex = i;
        std::swap(arr[fillPos], arr[minIndex]);
    }
}
