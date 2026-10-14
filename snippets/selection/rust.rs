// Selection sort: repeatedly select the minimum of the unsorted suffix.

pub fn sort_array(a: &mut [i32]) {
    let n = a.len();
    for i in 0..n.saturating_sub(1) {
        let mut m = i;
        for j in i + 1..n {
            if a[j] < a[m] {
                m = j;
            }
        }
        a.swap(i, m);
    }
}
