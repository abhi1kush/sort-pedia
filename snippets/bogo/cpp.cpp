// Bogo sort: shuffle until sorted. Expected O(n * n!) - tiny inputs only!
#include <algorithm>
#include <random>
#include <vector>

void sortArray(std::vector<int>& a) {
    std::mt19937 rng(42);
    while (!std::is_sorted(a.begin(), a.end())) std::shuffle(a.begin(), a.end(), rng);
}
