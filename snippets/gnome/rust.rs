// Gnome sort: step forward while in order, otherwise swap and step back.

pub fn sort_array(a: &mut [i32]) {
    let mut i = 0;
    while i < a.len() {
        if i == 0 || a[i] >= a[i - 1] {
            i += 1;
        } else {
            a.swap(i, i - 1);
            i -= 1;
        }
    }
}
