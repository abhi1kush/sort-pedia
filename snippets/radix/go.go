package main

// LSD radix sort, base 256, on the unsigned offset key (value - min).

func sortArray(a []int) {
	n := len(a)
	if n < 2 {
		return
	}
	min := a[0]
	for _, v := range a {
		if v < min {
			min = v
		}
	}
	key, out := make([]uint64, n), make([]uint64, n)
	var max uint64
	for i, v := range a {
		key[i] = uint64(v - min)
		if key[i] > max {
			max = key[i]
		}
	}
	for shift := uint(0); shift < 64 && max>>shift > 0; shift += 8 {
		var count [257]int
		for _, k := range key {
			count[(k>>shift)&255+1]++
		}
		for d := 0; d < 256; d++ {
			count[d+1] += count[d]
		}
		for _, k := range key {
			d := (k >> shift) & 255
			out[count[d]] = k
			count[d]++
		}
		key, out = out, key
	}
	for i, k := range key {
		a[i] = int(k) + min
	}
}
