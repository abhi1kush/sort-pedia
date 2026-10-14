// Top-down merge sort with one auxiliary buffer. Stable, O(n log n).

fn merge_sort(arr: &mut [i32], temp: &mut [i32]) {
    let n = arr.len();
    if n < 2 {
        return;
    }
    let mid = n / 2;
    merge_sort(&mut arr[..mid], &mut temp[..mid]);
    merge_sort(&mut arr[mid..], &mut temp[mid..]);
    let (mut left_pos, mut right_pos) = (0, mid);
    for slot in temp.iter_mut().take(n) {
        if right_pos >= n || (left_pos < mid && arr[left_pos] <= arr[right_pos]) {
            *slot = arr[left_pos];
            left_pos += 1;
        } else {
            *slot = arr[right_pos];
            right_pos += 1;
        }
    }
    arr.copy_from_slice(&temp[..n]);
}

pub fn sort_array(arr: &mut [i32]) {
    let mut temp = vec![0; arr.len()];
    merge_sort(arr, &mut temp);
}
