// Bitonic sort generalised to any n.

fn pow2_below(n: usize) -> usize {
    let mut k = 1;
    while k << 1 < n {
        k <<= 1;
    }
    k
}

fn bitonic_merge(a: &mut [i32], lo: usize, n: usize, up: bool) {
    if n <= 1 {
        return;
    }
    let m = pow2_below(n);
    for i in lo..lo + n - m {
        if (up && a[i] > a[i + m]) || (!up && a[i] < a[i + m]) {
            a.swap(i, i + m);
        }
    }
    bitonic_merge(a, lo, m, up);
    bitonic_merge(a, lo + m, n - m, up);
}

fn bitonic(a: &mut [i32], lo: usize, n: usize, up: bool) {
    if n <= 1 {
        return;
    }
    let m = n / 2;
    bitonic(a, lo, m, !up);
    bitonic(a, lo + m, n - m, up);
    bitonic_merge(a, lo, n, up);
}

pub fn sort_array(a: &mut [i32]) {
    let n = a.len();
    bitonic(a, 0, n, true);
}
