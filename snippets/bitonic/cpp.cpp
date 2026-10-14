// Bitonic sort generalised to any n.
#include <utility>
#include <vector>

static int pow2Below(int n) { int k = 1; while ((k << 1) < n) k <<= 1; return k; }

static void bitonicMerge(std::vector<int>& arr, int lo, int n, bool up) {
    if (n <= 1) return;
    int distance = pow2Below(n);
    for (int left = lo; left < lo + n - distance; left++)
        if (up ? arr[left] > arr[left + distance] : arr[left] < arr[left + distance]) std::swap(arr[left], arr[left + distance]);
    bitonicMerge(arr, lo, distance, up);
    bitonicMerge(arr, lo + distance, n - distance, up);
}

static void bitonic(std::vector<int>& arr, int lo, int n, bool up) {
    if (n <= 1) return;
    int half = n / 2;
    bitonic(arr, lo, half, !up);
    bitonic(arr, lo + half, n - half, up);
    bitonicMerge(arr, lo, n, up);
}

void sortArray(std::vector<int>& arr) { bitonic(arr, 0, static_cast<int>(arr.size()), true); }
