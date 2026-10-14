// Pancake sort: flip the max to the front, then flip it to the end.
#include <algorithm>
#include <vector>

void sortArray(std::vector<int>& arr) {
    for (size_t unsortedSize = arr.size(); unsortedSize > 1; unsortedSize--) {
        size_t maxIndex = std::max_element(arr.begin(), arr.begin() + unsortedSize) - arr.begin();
        if (maxIndex != unsortedSize - 1) {
            std::reverse(arr.begin(), arr.begin() + maxIndex + 1);   // flip max to front
            std::reverse(arr.begin(), arr.begin() + unsortedSize);     // flip it to the end
        }
    }
}
