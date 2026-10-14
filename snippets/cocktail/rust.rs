// Cocktail shaker sort: bubble passes in both directions.

pub fn sort_array(arr: &mut [i32]) {
    if arr.len() < 2 {
        return;
    }
    let (mut lo, mut hi) = (0, arr.len() - 1);
    let mut swapped = true;
    while swapped && lo < hi {
        swapped = false;
        for scan in lo..hi {
            if arr[scan + 1] < arr[scan] {
                arr.swap(scan, scan + 1);
                swapped = true;
            }
        }
        hi -= 1;
        for scan in (lo + 1..=hi).rev() {
            if arr[scan] < arr[scan - 1] {
                arr.swap(scan, scan - 1);
                swapped = true;
            }
        }
        lo += 1;
    }
}
