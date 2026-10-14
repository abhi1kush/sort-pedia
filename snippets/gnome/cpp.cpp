// Gnome sort: step forward while in order, otherwise swap and step back.
#include <utility>
#include <vector>

void sortArray(std::vector<int>& arr) {
    size_t gnomePos = 0;
    while (gnomePos < arr.size()) {
        if (gnomePos == 0 || arr[gnomePos] >= arr[gnomePos - 1]) gnomePos++;
        else { std::swap(arr[gnomePos], arr[gnomePos - 1]); gnomePos--; }
    }
}
