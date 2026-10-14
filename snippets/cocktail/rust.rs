// Cocktail shaker sort: bubble passes in both directions.

pub fn sort_array(a: &mut [i32]) {
    if a.len() < 2 {
        return;
    }
    let (mut lo, mut hi) = (0, a.len() - 1);
    let mut swapped = true;
    while swapped && lo < hi {
        swapped = false;
        for i in lo..hi {
            if a[i + 1] < a[i] {
                a.swap(i, i + 1);
                swapped = true;
            }
        }
        hi -= 1;
        for i in (lo + 1..=hi).rev() {
            if a[i] < a[i - 1] {
                a.swap(i, i - 1);
                swapped = true;
            }
        }
        lo += 1;
    }
}
