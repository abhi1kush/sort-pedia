// Bubble sort with early exit when a pass makes no swaps.

pub fn sort_array(arr: &mut [i32]) {
    let mut sorted_from = arr.len();
    while sorted_from > 1 {
        let mut swapped = false;
        for i in 1..sorted_from {
            if arr[i] < arr[i - 1] {
                arr.swap(i, i - 1);
                swapped = true;
            }
        }
        if !swapped {
            break;
        }
        sorted_from -= 1;
    }
}
