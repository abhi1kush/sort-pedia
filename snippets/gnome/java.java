// Gnome sort: step forward while in order, otherwise swap and step back.
class GnomeSort {
    public static void sort(int[] a) {
        int i = 0;
        while (i < a.length) {
            if (i == 0 || a[i] >= a[i - 1]) i++;
            else { int t = a[i]; a[i] = a[i - 1]; a[i - 1] = t; i--; }
        }
    }
}
