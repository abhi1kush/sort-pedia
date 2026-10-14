// Bitonic sort generalised to any n.
#include <utility>
#include <vector>

static int pow2Below(int n) { int k = 1; while ((k << 1) < n) k <<= 1; return k; }

static void bitonicMerge(std::vector<int>& a, int lo, int n, bool up) {
    if (n <= 1) return;
    int m = pow2Below(n);
    for (int i = lo; i < lo + n - m; i++)
        if (up ? a[i] > a[i + m] : a[i] < a[i + m]) std::swap(a[i], a[i + m]);
    bitonicMerge(a, lo, m, up);
    bitonicMerge(a, lo + m, n - m, up);
}

static void bitonic(std::vector<int>& a, int lo, int n, bool up) {
    if (n <= 1) return;
    int m = n / 2;
    bitonic(a, lo, m, !up);
    bitonic(a, lo + m, n - m, up);
    bitonicMerge(a, lo, n, up);
}

void sortArray(std::vector<int>& a) { bitonic(a, 0, static_cast<int>(a.size()), true); }
