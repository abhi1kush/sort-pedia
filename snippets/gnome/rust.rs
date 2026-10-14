// Gnome sort: step forward while in order, otherwise swap and step back.

pub fn sort_array(arr: &mut [i32]) {
    let mut gnome_pos = 0;
    while gnome_pos < arr.len() {
        if gnome_pos == 0 || arr[gnome_pos] >= arr[gnome_pos - 1] {
            gnome_pos += 1;
        } else {
            arr.swap(gnome_pos, gnome_pos - 1);
            gnome_pos -= 1;
        }
    }
}
