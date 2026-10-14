// 3-way (Dijkstra) quicksort with a random pivot: handles duplicates well.
#include <random>
#include <utility>
#include <vector>

static std::mt19937 rng(12345);

static void quick(std::vector<int>& a, int lo, int hi) {
    while (lo < hi) {
        std::uniform_int_distribution<int> pick(lo, hi);
        std::swap(a[lo], a[pick(rng)]);
        int v = a[lo], lt = lo, i = lo + 1, gt = hi;
        while (i <= gt) {
            if (a[i] < v) std::swap(a[lt++], a[i++]);
            else if (a[i] > v) std::swap(a[i], a[gt--]);
            else i++;
        }
        if (lt - lo < hi - gt) { quick(a, lo, lt - 1); lo = gt + 1; }
        else { quick(a, gt + 1, hi); hi = lt - 1; }
    }
}

void sortArray(std::vector<int>& a) { quick(a, 0, static_cast<int>(a.size()) - 1); }
