// Bitonic sort generalised to any n.

fn pow2_below(n: usize) -> usize {
    let mut k = 1;
    while k << 1 < n {
        k <<= 1;
    }
    k
}

fn bitonic_merge(arr: &mut [i32], lo: usize, n: usize, up: bool) {
    if n <= 1 {
        return;
    }
    let distance = pow2_below(n);
    for left in lo..lo + n - distance {
        if (up && arr[left] > arr[left + distance]) || (!up && arr[left] < arr[left + distance]) {
            arr.swap(left, left + distance);
        }
    }
    bitonic_merge(arr, lo, distance, up);
    bitonic_merge(arr, lo + distance, n - distance, up);
}

fn bitonic(arr: &mut [i32], lo: usize, n: usize, up: bool) {
    if n <= 1 {
        return;
    }
    let half = n / 2;
    bitonic(arr, lo, half, !up);
    bitonic(arr, lo + half, n - half, up);
    bitonic_merge(arr, lo, n, up);
}

pub fn sort_array(arr: &mut [i32]) {
    let n = arr.len();
    bitonic(arr, 0, n, true);
}
