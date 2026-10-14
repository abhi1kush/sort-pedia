// Insertion sort: grow a sorted prefix one element at a time.
#include <vector>

void sortArray(std::vector<int>& arr) {
    for (size_t current = 1; current < arr.size(); current++) {
        int key = arr[current];
        size_t hole = current;
        while (hole > 0 && key < arr[hole - 1]) { arr[hole] = arr[hole - 1]; hole--; }
        arr[hole] = key;
    }
}
