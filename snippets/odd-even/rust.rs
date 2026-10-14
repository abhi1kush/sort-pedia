// Odd-even (brick) sort: alternate compare-swaps on odd and even pairs.

pub fn sort_array(a: &mut [i32]) {
    let mut sorted = false;
    while !sorted {
        sorted = true;
        for start in [1, 0] {
            let mut i = start;
            while i + 1 < a.len() {
                if a[i + 1] < a[i] {
                    a.swap(i, i + 1);
                    sorted = false;
                }
                i += 2;
            }
        }
    }
}
