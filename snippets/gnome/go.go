package main

// Gnome sort: step forward while in order, otherwise swap and step back.

func sortArray(a []int) {
	i := 0
	for i < len(a) {
		if i == 0 || a[i] >= a[i-1] {
			i++
		} else {
			a[i], a[i-1] = a[i-1], a[i]
			i--
		}
	}
}
