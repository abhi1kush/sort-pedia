// Counting sort for integers in a known (small) range [min, max].

pub fn sort_array(a: &mut [i32]) {
    if a.len() < 2 {
        return;
    }
    let min = *a.iter().min().unwrap() as i64;
    let max = *a.iter().max().unwrap() as i64;
    let mut count = vec![0usize; (max - min + 1) as usize];
    for &v in a.iter() {
        count[(v as i64 - min) as usize] += 1;
    }
    let mut k = 0;
    for (v, &c) in count.iter().enumerate() {
        for _ in 0..c {
            a[k] = (v as i64 + min) as i32;
            k += 1;
        }
    }
}
