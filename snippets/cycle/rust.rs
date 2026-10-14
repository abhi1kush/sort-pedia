// Cycle sort: rotate each permutation cycle into place (minimum writes).

pub fn sort_array(a: &mut [i32]) {
    let n = a.len();
    for start in 0..n.saturating_sub(1) {
        let mut item = a[start];
        let mut pos = start + a[start + 1..].iter().filter(|&&x| x < item).count();
        if pos == start {
            continue;
        }
        while item == a[pos] {
            pos += 1;
        }
        std::mem::swap(&mut item, &mut a[pos]);
        while pos != start {
            pos = start + a[start + 1..].iter().filter(|&&x| x < item).count();
            while item == a[pos] {
                pos += 1;
            }
            if item != a[pos] {
                std::mem::swap(&mut item, &mut a[pos]);
            }
        }
    }
}
