// Bogo sort: shuffle until sorted. Expected O(n * n!) - tiny inputs only!
#include <algorithm>
#include <random>
#include <vector>

void sortArray(std::vector<int>& arr) {
    std::mt19937 rng(42);
    while (!std::is_sorted(arr.begin(), arr.end())) std::shuffle(arr.begin(), arr.end(), rng);
}
