// Cocktail shaker sort: bubble passes in both directions.
#include <utility>
#include <vector>

void sortArray(std::vector<int>& arr) {
    int lo = 0, hi = static_cast<int>(arr.size()) - 1;
    bool swapped = true;
    while (swapped && lo < hi) {
        swapped = false;
        for (int i = lo; i < hi; i++)
            if (arr[i + 1] < arr[i]) { std::swap(arr[i], arr[i + 1]); swapped = true; }
        hi--;
        for (int i = hi; i > lo; i--)
            if (arr[i] < arr[i - 1]) { std::swap(arr[i], arr[i - 1]); swapped = true; }
        lo++;
    }
}
