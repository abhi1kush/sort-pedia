// Simplified Timsort: natural runs extended to MINRUN with binary
// insertion sort, merged via a stack that keeps run lengths balanced.
#include <algorithm>
#include <utility>
#include <vector>

static int minRun(int n) {
    int r = 0;
    while (n >= 32) { r |= n & 1; n >>= 1; }
    return n + r;
}

static void mergeRuns(std::vector<int>& a, int lo, int mid, int hi) {
    std::vector<int> tmp(a.begin() + lo, a.begin() + mid);
    size_t i = 0;
    int j = mid, k = lo;
    while (i < tmp.size() && j < hi) a[k++] = (a[j] < tmp[i]) ? a[j++] : tmp[i++];
    while (i < tmp.size()) a[k++] = tmp[i++];
}

void sortArray(std::vector<int>& a) {
    int n = static_cast<int>(a.size());
    if (n < 2) return;
    int minrun = minRun(n);
    std::vector<std::pair<int, int>> runs;  // (start, length)
    auto mergeAt = [&](size_t i) {
        mergeRuns(a, runs[i].first, runs[i].first + runs[i].second,
                  runs[i].first + runs[i].second + runs[i + 1].second);
        runs[i].second += runs[i + 1].second;
        runs.erase(runs.begin() + i + 1);
    };
    for (int lo = 0; lo < n;) {
        int hi = lo + 1;
        if (hi < n) {
            if (a[hi] < a[lo]) {  // strictly descending: reverse
                while (hi + 1 < n && a[hi + 1] < a[hi]) hi++;
                std::reverse(a.begin() + lo, a.begin() + hi + 1);
            } else {
                while (hi + 1 < n && a[hi + 1] >= a[hi]) hi++;
            }
            hi++;
        }
        int end = std::max(std::min(n, lo + minrun), hi);
        for (int i = hi; i < end; i++) {  // binary insertion sort
            int key = a[i];
            auto pos = std::upper_bound(a.begin() + lo, a.begin() + i, key);
            std::move_backward(pos, a.begin() + i, a.begin() + i + 1);
            *pos = key;
        }
        runs.push_back({lo, end - lo});
        lo = end;
        while (runs.size() > 1) {
            size_t m = runs.size();
            int b = runs[m - 2].second, c = runs[m - 1].second;
            if ((m >= 3 && runs[m - 3].second <= b + c) ||
                (m >= 4 && runs[m - 4].second <= runs[m - 3].second + b)) {
                mergeAt(runs[m - 3].second < c ? m - 3 : m - 2);
            } else if (b <= c) {
                mergeAt(m - 2);
            } else {
                break;
            }
        }
    }
    while (runs.size() > 1) mergeAt(runs.size() - 2);
}
