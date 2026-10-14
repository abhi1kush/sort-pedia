// Comb sort: bubble sort over a shrinking gap (factor 1.3).

pub fn sort_array(a: &mut [i32]) {
    let mut gap = a.len();
    let mut sorted = false;
    while !sorted {
        gap = (gap as f64 / 1.3) as usize;
        if gap <= 1 {
            gap = 1;
            sorted = true;
        }
        for i in 0..a.len().saturating_sub(gap) {
            if a[i + gap] < a[i] {
                a.swap(i, i + gap);
                sorted = false;
            }
        }
    }
}
