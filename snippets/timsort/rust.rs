// Simplified Timsort: natural runs extended to MIN_RUN with binary
// insertion sort, merged via a stack that keeps run lengths balanced.

fn min_run(mut n: usize) -> usize {
    let mut r = 0;
    while n >= 32 {
        r |= n & 1;
        n >>= 1;
    }
    n + r
}

fn merge_runs(arr: &mut [i32], lo: usize, mid: usize, hi: usize) {
    let temp = arr[lo..mid].to_vec();
    let (mut i, mut j, mut k) = (0, mid, lo);
    while i < temp.len() && j < hi {
        if arr[j] < temp[i] {
            arr[k] = arr[j];
            j += 1;
        } else {
            arr[k] = temp[i];
            i += 1;
        }
        k += 1;
    }
    arr[k..k + temp.len() - i].copy_from_slice(&temp[i..]);
}

fn merge_at(arr: &mut [i32], runs: &mut Vec<(usize, usize)>, i: usize) {
    let ((s, l1), (_, l2)) = (runs[i], runs[i + 1]);
    merge_runs(arr, s, s + l1, s + l1 + l2);
    runs[i].1 = l1 + l2;
    runs.remove(i + 1);
}

pub fn sort_array(arr: &mut [i32]) {
    let n = arr.len();
    if n < 2 {
        return;
    }
    let minrun = min_run(n);
    let mut runs: Vec<(usize, usize)> = Vec::new(); // (start, len)
    let mut lo = 0;
    while lo < n {
        let mut hi = lo + 1;
        if hi < n {
            if arr[hi] < arr[lo] {
                // strictly descending: reverse
                while hi + 1 < n && arr[hi + 1] < arr[hi] {
                    hi += 1;
                }
                arr[lo..=hi].reverse();
            } else {
                while hi + 1 < n && arr[hi + 1] >= arr[hi] {
                    hi += 1;
                }
            }
            hi += 1;
        }
        let end = (lo + minrun).min(n).max(hi);
        for i in hi..end {
            // binary insertion sort
            let key = arr[i];
            let pos = lo + arr[lo..i].partition_point(|&x| x <= key);
            arr[pos..=i].rotate_right(1);
            arr[pos] = key;
        }
        runs.push((lo, end - lo));
        lo = end;
        while runs.len() > 1 {
            let m = runs.len();
            let (b, c) = (runs[m - 2].1, runs[m - 1].1);
            if (m >= 3 && runs[m - 3].1 <= b + c) || (m >= 4 && runs[m - 4].1 <= runs[m - 3].1 + b) {
                let at = if runs[m - 3].1 < c { m - 3 } else { m - 2 };
                merge_at(arr, &mut runs, at);
            } else if b <= c {
                merge_at(arr, &mut runs, m - 2);
            } else {
                break;
            }
        }
    }
    while runs.len() > 1 {
        let at = runs.len() - 2;
        merge_at(arr, &mut runs, at);
    }
}
