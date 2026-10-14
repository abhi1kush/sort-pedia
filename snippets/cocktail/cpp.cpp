// Cocktail shaker sort: bubble passes in both directions.
#include <utility>
#include <vector>

void sortArray(std::vector<int>& a) {
    int lo = 0, hi = static_cast<int>(a.size()) - 1;
    bool swapped = true;
    while (swapped && lo < hi) {
        swapped = false;
        for (int i = lo; i < hi; i++)
            if (a[i + 1] < a[i]) { std::swap(a[i], a[i + 1]); swapped = true; }
        hi--;
        for (int i = hi; i > lo; i--)
            if (a[i] < a[i - 1]) { std::swap(a[i], a[i - 1]); swapped = true; }
        lo++;
    }
}
