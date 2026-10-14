/* Gnome sort: step forward while in order, otherwise swap and step back. */
void sort_array(int *arr, int n) {
    int gnome_pos = 0;
    while (gnome_pos < n) {
        if (gnome_pos == 0 || arr[gnome_pos] >= arr[gnome_pos - 1]) gnome_pos++;
        else { int t = arr[gnome_pos]; arr[gnome_pos] = arr[gnome_pos - 1]; arr[gnome_pos - 1] = t; gnome_pos--; }
    }
}
