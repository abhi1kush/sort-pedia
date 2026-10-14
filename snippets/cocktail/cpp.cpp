// Cocktail shaker sort: bubble passes in both directions.
#include <utility>
#include <vector>

void sortArray(std::vector<int>& arr) {
    int lo = 0, hi = static_cast<int>(arr.size()) - 1;
    bool swapped = true;
    while (swapped && lo < hi) {
        swapped = false;
        for (int scan = lo; scan < hi; scan++)
            if (arr[scan + 1] < arr[scan]) { std::swap(arr[scan], arr[scan + 1]); swapped = true; }
        hi--;
        for (int scan = hi; scan > lo; scan--)
            if (arr[scan] < arr[scan - 1]) { std::swap(arr[scan], arr[scan - 1]); swapped = true; }
        lo++;
    }
}
