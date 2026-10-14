"""Gnome sort: step forward while in order, otherwise swap and step back."""


def sort_array(a):
    i = 0
    while i < len(a):
        if i == 0 or a[i] >= a[i - 1]:
            i += 1
        else:
            a[i], a[i - 1] = a[i - 1], a[i]
            i -= 1
    return a
