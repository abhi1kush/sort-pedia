// Cycle sort: rotate each permutation cycle into place (minimum writes).
#include <utility>
#include <vector>

void sortArray(std::vector<int>& arr) {
    size_t n = arr.size();
    for (size_t cycleStart = 0; cycleStart + 1 < n; cycleStart++) {
        int item = arr[cycleStart];
        size_t targetPos = cycleStart;
        for (size_t scan = cycleStart + 1; scan < n; scan++) if (arr[scan] < item) targetPos++;
        if (targetPos == cycleStart) continue;
        while (item == arr[targetPos]) targetPos++;
        std::swap(item, arr[targetPos]);
        while (targetPos != cycleStart) {
            targetPos = cycleStart;
            for (size_t scan = cycleStart + 1; scan < n; scan++) if (arr[scan] < item) targetPos++;
            while (item == arr[targetPos]) targetPos++;
            if (item != arr[targetPos]) std::swap(item, arr[targetPos]);
        }
    }
}
