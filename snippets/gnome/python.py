"""Gnome sort: step forward while in order, otherwise swap and step back."""


def sort_array(arr):
    gnome_pos = 0
    while gnome_pos < len(arr):
        if gnome_pos == 0 or arr[gnome_pos] >= arr[gnome_pos - 1]:
            gnome_pos += 1
        else:
            arr[gnome_pos], arr[gnome_pos - 1] = arr[gnome_pos - 1], arr[gnome_pos]
            gnome_pos -= 1
    return arr
