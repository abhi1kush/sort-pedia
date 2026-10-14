// Bucket sort: scatter into n buckets by value range, insertion-sort
// each bucket, then concatenate.

pub fn sort_array(a: &mut [i32]) {
    let n = a.len();
    if n < 2 {
        return;
    }
    let min = *a.iter().min().unwrap() as i64;
    let range = *a.iter().max().unwrap() as i64 - min + 1;
    let mut buckets: Vec<Vec<i32>> = vec![Vec::new(); n];
    for &v in a.iter() {
        buckets[((v as i64 - min) * n as i64 / range) as usize].push(v);
    }
    let mut k = 0;
    for mut b in buckets {
        for i in 1..b.len() {
            // insertion sort
            let key = b[i];
            let mut j = i;
            while j > 0 && key < b[j - 1] {
                b[j] = b[j - 1];
                j -= 1;
            }
            b[j] = key;
        }
        a[k..k + b.len()].copy_from_slice(&b);
        k += b.len();
    }
}
