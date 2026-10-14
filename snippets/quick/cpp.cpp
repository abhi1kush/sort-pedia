// 3-way (Dijkstra) quicksort with a random pivot: handles duplicates well.
#include <random>
#include <utility>
#include <vector>

static std::mt19937 rng(12345);

static void quick(std::vector<int>& arr, int lo, int hi) {
    while (lo < hi) {
        std::uniform_int_distribution<int> pick(lo, hi);
        std::swap(arr[lo], arr[pick(rng)]);
        int pivot = arr[lo], lessEnd = lo, i = lo + 1, greaterStart = hi;
        while (i <= greaterStart) {
            if (arr[i] < pivot) std::swap(arr[lessEnd++], arr[i++]);
            else if (arr[i] > pivot) std::swap(arr[i], arr[greaterStart--]);
            else i++;
        }
        if (lessEnd - lo < hi - greaterStart) { quick(arr, lo, lessEnd - 1); lo = greaterStart + 1; }
        else { quick(arr, greaterStart + 1, hi); hi = lessEnd - 1; }
    }
}

void sortArray(std::vector<int>& arr) { quick(arr, 0, static_cast<int>(arr.size()) - 1); }
