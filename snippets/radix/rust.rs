// LSD radix sort, base 256, on the unsigned offset key (value - min).

pub fn sort_array(arr: &mut [i32]) {
    let n = arr.len();
    if n < 2 {
        return;
    }
    let min = *arr.iter().min().unwrap() as i64;
    let mut key: Vec<u32> = arr.iter().map(|&v| (v as i64 - min) as u32).collect();
    let max = *key.iter().max().unwrap();
    let mut output = vec![0u32; n];
    let mut shift = 0;
    while shift < 32 && (max >> shift) > 0 {
        let mut count = [0usize; 257];
        for &k in &key {
            count[((k >> shift) & 255) as usize + 1] += 1;
        }
        for d in 0..256 {
            count[d + 1] += count[d];
        }
        for &k in &key {
            let d = ((k >> shift) & 255) as usize;
            output[count[d]] = k;
            count[d] += 1;
        }
        std::mem::swap(&mut key, &mut output);
        shift += 8;
    }
    for (slot, &k) in arr.iter_mut().zip(&key) {
        *slot = (k as i64 + min) as i32;
    }
}
