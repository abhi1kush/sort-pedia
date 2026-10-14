// Selection sort: repeatedly select the minimum of the unsorted suffix.

pub fn sort_array(arr: &mut [i32]) {
    let n = arr.len();
    for fill_pos in 0..n.saturating_sub(1) {
        let mut min_index = fill_pos;
        for scan in fill_pos + 1..n {
            if arr[scan] < arr[min_index] {
                min_index = scan;
            }
        }
        arr.swap(fill_pos, min_index);
    }
}
