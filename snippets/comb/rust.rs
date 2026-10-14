// Comb sort: bubble sort over a shrinking gap (factor 1.3).

pub fn sort_array(arr: &mut [i32]) {
    let mut gap = arr.len();
    let mut sorted = false;
    while !sorted {
        gap = (gap as f64 / 1.3) as usize;
        if gap <= 1 {
            gap = 1;
            sorted = true;
        }
        for left in 0..arr.len().saturating_sub(gap) {
            if arr[left + gap] < arr[left] {
                arr.swap(left, left + gap);
                sorted = false;
            }
        }
    }
}
