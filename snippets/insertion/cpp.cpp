// Insertion sort: grow a sorted prefix one element at a time.
#include <vector>

void sortArray(std::vector<int>& a) {
    for (size_t i = 1; i < a.size(); i++) {
        int key = a[i];
        size_t j = i;
        while (j > 0 && key < a[j - 1]) { a[j] = a[j - 1]; j--; }
        a[j] = key;
    }
}
