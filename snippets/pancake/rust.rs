// Pancake sort: flip the max to the front, then flip it to the end.

pub fn sort_array(arr: &mut [i32]) {
    for unsorted_size in (2..=arr.len()).rev() {
        let mut max_index = 0;
        for scan in 1..unsorted_size {
            if arr[scan] > arr[max_index] {
                max_index = scan;
            }
        }
        if max_index != unsorted_size - 1 {
            arr[..=max_index].reverse(); // flip max to the front
            arr[..unsorted_size].reverse(); // flip it to the end
        }
    }
}
