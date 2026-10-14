// Odd-even (brick) sort: alternate compare-swaps on odd and even pairs.
#include <utility>
#include <vector>

void sortArray(std::vector<int>& arr) {
    bool sorted = false;
    while (!sorted) {
        sorted = true;
        for (size_t phase : {1, 0})
            for (size_t pairStart = phase; pairStart + 1 < arr.size(); pairStart += 2)
                if (arr[pairStart + 1] < arr[pairStart]) { std::swap(arr[pairStart], arr[pairStart + 1]); sorted = false; }
    }
}
