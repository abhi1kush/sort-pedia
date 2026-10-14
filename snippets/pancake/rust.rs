// Pancake sort: flip the max to the front, then flip it to the end.

pub fn sort_array(a: &mut [i32]) {
    for size in (2..=a.len()).rev() {
        let mut mi = 0;
        for i in 1..size {
            if a[i] > a[mi] {
                mi = i;
            }
        }
        if mi != size - 1 {
            a[..=mi].reverse(); // flip max to the front
            a[..size].reverse(); // flip it to the end
        }
    }
}
