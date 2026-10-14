// Bubble sort with early exit when a pass makes no swaps.

pub fn sort_array(a: &mut [i32]) {
    let mut end = a.len();
    while end > 1 {
        let mut swapped = false;
        for i in 1..end {
            if a[i] < a[i - 1] {
                a.swap(i, i - 1);
                swapped = true;
            }
        }
        if !swapped {
            break;
        }
        end -= 1;
    }
}
