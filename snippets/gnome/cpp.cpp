// Gnome sort: step forward while in order, otherwise swap and step back.
#include <utility>
#include <vector>

void sortArray(std::vector<int>& a) {
    size_t i = 0;
    while (i < a.size()) {
        if (i == 0 || a[i] >= a[i - 1]) i++;
        else { std::swap(a[i], a[i - 1]); i--; }
    }
}
