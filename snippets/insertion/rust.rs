// Insertion sort: grow a sorted prefix one element at a time.

pub fn sort_array(a: &mut [i32]) {
    for i in 1..a.len() {
        let key = a[i];
        let mut j = i;
        while j > 0 && key < a[j - 1] {
            a[j] = a[j - 1];
            j -= 1;
        }
        a[j] = key;
    }
}
