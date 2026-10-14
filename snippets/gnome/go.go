package main

// Gnome sort: step forward while in order, otherwise swap and step back.

func sortArray(arr []int) {
	gnomePos := 0
	for gnomePos < len(arr) {
		if gnomePos == 0 || arr[gnomePos] >= arr[gnomePos-1] {
			gnomePos++
		} else {
			arr[gnomePos], arr[gnomePos-1] = arr[gnomePos-1], arr[gnomePos]
			gnomePos--
		}
	}
}
