// Odd-even (brick) sort: alternate compare-swaps on odd and even pairs.

pub fn sort_array(arr: &mut [i32]) {
    let mut sorted = false;
    while !sorted {
        sorted = true;
        for phase in [1, 0] {
            let mut pair_start = phase;
            while pair_start + 1 < arr.len() {
                if arr[pair_start + 1] < arr[pair_start] {
                    arr.swap(pair_start, pair_start + 1);
                    sorted = false;
                }
                pair_start += 2;
            }
        }
    }
}
