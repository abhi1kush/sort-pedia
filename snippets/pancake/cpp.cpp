// Pancake sort: flip the max to the front, then flip it to the end.
#include <algorithm>
#include <vector>

void sortArray(std::vector<int>& a) {
    for (size_t size = a.size(); size > 1; size--) {
        size_t mi = std::max_element(a.begin(), a.begin() + size) - a.begin();
        if (mi != size - 1) {
            std::reverse(a.begin(), a.begin() + mi + 1);   // flip max to front
            std::reverse(a.begin(), a.begin() + size);     // flip it to the end
        }
    }
}
