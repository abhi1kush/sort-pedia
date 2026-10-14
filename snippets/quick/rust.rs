// 3-way (Dijkstra) quicksort with a random pivot: handles duplicates well.
// A tiny xorshift PRNG keeps the snippet dependency-free.

fn next_rand(state: &mut u64) -> u64 {
    *state ^= *state << 13;
    *state ^= *state >> 7;
    *state ^= *state << 17;
    *state
}

fn quick(a: &mut [i32], rng: &mut u64) {
    let (mut lo, mut hi) = (0usize, a.len());
    // sort a[lo..hi)
    while hi - lo > 1 {
        let p = lo + (next_rand(rng) % (hi - lo) as u64) as usize;
        a.swap(lo, p);
        let v = a[lo];
        let (mut lt, mut i, mut gt) = (lo, lo + 1, hi);
        while i < gt {
            if a[i] < v {
                a.swap(lt, i);
                lt += 1;
                i += 1;
            } else if a[i] > v {
                gt -= 1;
                a.swap(i, gt);
            } else {
                i += 1;
            }
        }
        // a[lo..lt) < v, a[lt..gt) == v, a[gt..hi) > v
        if lt - lo < hi - gt {
            quick(&mut a[lo..lt], rng);
            lo = gt;
        } else {
            quick(&mut a[gt..hi], rng);
            hi = lt;
        }
    }
}

pub fn sort_array(a: &mut [i32]) {
    let mut rng = 0x2545_F491_4F6C_DD1D_u64;
    quick(a, &mut rng);
}
