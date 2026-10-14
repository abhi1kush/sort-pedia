// Bogo sort: shuffle until sorted. Expected O(n * n!) - tiny inputs only!
// A tiny xorshift PRNG keeps the snippet dependency-free.

pub fn sort_array(arr: &mut [i32]) {
    let mut state = 0x9E37_79B9_7F4A_7C15_u64;
    while !arr.windows(2).all(|w| w[0] <= w[1]) {
        for i in (1..arr.len()).rev() {
            // Fisher-Yates shuffle
            state ^= state << 13;
            state ^= state >> 7;
            state ^= state << 17;
            let j = (state % (i as u64 + 1)) as usize;
            arr.swap(i, j);
        }
    }
}
