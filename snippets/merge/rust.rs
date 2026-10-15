// Top-down recursive merge sort on the inclusive range arr[lo..=hi]. Stable, O(n log n).

/// Merge the sorted halves arr[lo..=mid] and arr[mid+1..=hi] using the buffer temp.
fn merge(arr: &mut [i32], temp: &mut [i32], lo: usize, mid: usize, hi: usize) {
    let (mut left_pos, mut right_pos) = (lo, mid + 1);
    for write_pos in lo..=hi {
        if right_pos > hi || (left_pos <= mid && arr[left_pos] <= arr[right_pos]) {
            temp[write_pos] = arr[left_pos];
            left_pos += 1;
        } else {
            temp[write_pos] = arr[right_pos];
            right_pos += 1;
        }
    }
    arr[lo..=hi].copy_from_slice(&temp[lo..=hi]);
}

fn merge_sort(arr: &mut [i32], temp: &mut [i32], lo: usize, hi: usize) {
    if lo >= hi {
        return; // zero or one element: already sorted
    }
    let mid = lo + (hi - lo) / 2;
    merge_sort(arr, temp, lo, mid); // sort the left half
    merge_sort(arr, temp, mid + 1, hi); // sort the right half
    merge(arr, temp, lo, mid, hi); // merge the two sorted halves
}

pub fn sort_array(arr: &mut [i32]) {
    if arr.len() < 2 {
        return;
    }
    let mut temp = vec![0; arr.len()];
    let hi = arr.len() - 1;
    merge_sort(arr, &mut temp, 0, hi);
}
