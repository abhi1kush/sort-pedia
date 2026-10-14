// Top-down merge sort with one auxiliary buffer. Stable, O(n log n).

fn merge_sort(a: &mut [i32], tmp: &mut [i32]) {
    let n = a.len();
    if n < 2 {
        return;
    }
    let mid = n / 2;
    merge_sort(&mut a[..mid], &mut tmp[..mid]);
    merge_sort(&mut a[mid..], &mut tmp[mid..]);
    let (mut i, mut j) = (0, mid);
    for slot in tmp.iter_mut().take(n) {
        if j >= n || (i < mid && a[i] <= a[j]) {
            *slot = a[i];
            i += 1;
        } else {
            *slot = a[j];
            j += 1;
        }
    }
    a.copy_from_slice(&tmp[..n]);
}

pub fn sort_array(a: &mut [i32]) {
    let mut tmp = vec![0; a.len()];
    merge_sort(a, &mut tmp);
}
