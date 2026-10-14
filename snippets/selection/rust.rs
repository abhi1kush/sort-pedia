// Selection sort: repeatedly select the minimum of the unsorted suffix.

pub fn sort_array(arr: &mut [i32]) {
    let n = arr.len();
    for fill_pos in 0..n.saturating_sub(1) {
        let mut min_index = fill_pos;
        for i in fill_pos + 1..n {
            if arr[i] < arr[min_index] {
                min_index = i;
            }
        }
        arr.swap(fill_pos, min_index);
    }
}
