// Bubble sort with early exit when a pass makes no swaps.

pub fn sort_array(arr: &mut [i32]) {
    let mut sorted_from = arr.len();
    while sorted_from > 1 {
        let mut swapped = false;
        for scan in 1..sorted_from {
            if arr[scan] < arr[scan - 1] {
                arr.swap(scan, scan - 1);
                swapped = true;
            }
        }
        if !swapped {
            break;
        }
        sorted_from -= 1;
    }
}
