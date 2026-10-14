// Cocktail shaker sort: bubble passes in both directions.

pub fn sort_array(arr: &mut [i32]) {
    if arr.len() < 2 {
        return;
    }
    let (mut lo, mut hi) = (0, arr.len() - 1);
    let mut swapped = true;
    while swapped && lo < hi {
        swapped = false;
        for i in lo..hi {
            if arr[i + 1] < arr[i] {
                arr.swap(i, i + 1);
                swapped = true;
            }
        }
        hi -= 1;
        for i in (lo + 1..=hi).rev() {
            if arr[i] < arr[i - 1] {
                arr.swap(i, i - 1);
                swapped = true;
            }
        }
        lo += 1;
    }
}
