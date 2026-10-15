// Metadata for every algorithm, in rank order (best first). The ranking is a
// practical "what should I reach for" ordering; see RANKING_RATIONALE.

export type Growth = 'n' | 'nk' | 'nlogn' | 'nlog2n' | 'n32' | 'n2' | 'nfact';

export interface Algo {
  id: string;
  name: string;
  rank: number;
  family: string;
  summary: string;
  why: string; // why it sits at this rank
  best: string;
  avg: string;
  worst: string;
  space: string;
  stable: boolean;
  inPlace: boolean;
  growth: Growth; // average-case growth used in the complexity chart
  suitable: string;
  bad: string;
  uses: string[];
  steps: string[];
  pseudocode: string;
  maxInput: number; // playground / run limit
  maxViz: number; // visualization limit
  benchSizes: number[];
}

export const RANKING_RATIONALE = [
  'Practical performance first: how fast it is on real hardware for typical inputs (cache behaviour, constant factors, adaptivity to presorted data).',
  'Then average and worst-case complexity: O(n log n) comparison sorts beat O(n²) ones; guaranteed worst cases beat ones that can degrade.',
  'Stability and generality break ties: a stable, general-purpose comparison sort beats one that only works on bounded integers or needs extra conditions.',
  'Non-comparison sorts (radix, counting, bucket) can be the fastest of all on integer keys, but they are ranked below the general-purpose sorts because they only work on keys with bounded size or range.',
  'Novelty / teaching-only algorithms (pancake, bogo) come last.',
];

export const NOTATION = 'Notation: arr = the array being sorted; n = number of elements in arr; arr[i] = the element at index i (counting from 0); lo..hi = the range currently being worked on; O(...) = how the work grows with n.';

const FAST = [1000, 5000, 20000, 50000, 100000];
const SLOW = [100, 500, 1000, 2000, 4000];
const LIMIT_FAST = 100000;
const LIMIT_SLOW = 20000;
const VIZ = 120;

export const ALGORITHMS: Algo[] = [
  {
    id: 'timsort', name: 'Timsort (hybrid)', rank: 1, family: 'Hybrid merge + insertion',
    summary: 'Finds naturally ordered runs, extends short runs with binary insertion sort, and merges runs with a balanced stack.',
    why: 'Default sort in Python, Java (objects), Android, V8: stable, O(n log n) worst case and O(n) on already-sorted or run-structured data.',
    best: 'O(n)', avg: 'O(n log n)', worst: 'O(n log n)', space: 'O(n)', stable: true, inPlace: false, growth: 'nlogn',
    suitable: 'General-purpose sorting, especially real-world data that is partially sorted, and whenever stability matters.',
    bad: 'Random data of primitives where an unstable in-place quicksort variant is slightly faster and needs no buffer.',
    uses: ['Python list.sort / sorted', 'Java Arrays.sort for objects, Collections.sort', 'V8 Array.prototype.sort', 'Rust slice::sort (driftsort, a descendant)'],
    steps: [
      'Pick a minimum run length, minRun, between 32 and 64 so that n / minRun (n = number of elements) is close to a power of two.',
      'Scan left to right for a natural run: an ascending or strictly descending sequence (reverse descending runs).',
      'If the run is shorter than minRun, extend it with binary insertion sort.',
      'Push the run onto a stack. Look at the lengths of the three runs on top (A, B, and C on the very top); while A ≤ B + C or B ≤ C, merge neighbouring runs so the stack stays balanced.',
      'At the end, merge everything left on the stack. Merges take from the left run on ties, keeping the sort stable.',
    ],
    pseudocode: `timsort(arr):
  minRun ← computeMinRun(n)
  runs ← empty stack
  lo ← 0
  while lo < n:
    hi ← end of the natural run starting at lo
    if run is strictly descending: reverse arr[lo..hi)
    runEnd ← max(hi, min(n, lo + minRun))
    binaryInsertionSort(arr, lo, hi, runEnd)
    push (lo, runEnd - lo) on runs
    mergeCollapse(runs)       // top run lengths A, B, C: keep A > B + C and B > C
    lo ← runEnd
  merge all remaining runs`,
    maxInput: LIMIT_FAST, maxViz: VIZ, benchSizes: FAST,
  },
  {
    id: 'introsort', name: 'Introsort', rank: 2, family: 'Hybrid quick + heap + insertion',
    summary: 'Quicksort with median-of-three pivots that switches to heapsort when recursion gets too deep and to insertion sort for tiny ranges.',
    why: 'Quicksort speed with a guaranteed O(n log n) worst case and O(log n) space; the basis of C++ std::sort and .NET Array.Sort. Unstable, so ranked just below Timsort.',
    best: 'O(n log n)', avg: 'O(n log n)', worst: 'O(n log n)', space: 'O(log n)', stable: false, inPlace: true, growth: 'nlogn',
    suitable: 'Sorting primitives in place when stability is not needed and worst-case guarantees are.',
    bad: 'When stability is required, or data is mostly sorted (it does not exploit existing order like Timsort).',
    uses: ['C++ std::sort (libstdc++, MSVC)', '.NET Array.Sort', 'Go sort.Sort (pdqsort, a descendant)'],
    steps: [
      "Set a depth limit of about 2·log2(n), where n = number of elements.",
      "While the range has more than 16 elements: if the depth limit hits 0, heapsort this range and stop.",
      "Otherwise put the median of first, middle and last at the end as the pivot, then partition: i walks the range and every element smaller than the pivot is swapped to storePos, which then moves right.",
      "Swap the pivot into storePos (its final place). Recurse into the smaller side and loop on the larger one (bounded stack).",
      "Finish small ranges with insertion sort.",
    ],
    pseudocode: `introsort(arr, lo, hi, depth):
  while hi - lo > 16:
    if depth = 0:
      heapsort(arr, lo, hi); return
    depth ← depth - 1
    pivotPos ← hi - 1   // after moving the median of three there
    storePos ← lo
    for i ← lo to pivotPos - 1:
      if arr[i] < arr[pivotPos]: swap arr[storePos], arr[i]; storePos++
    swap arr[storePos], arr[pivotPos]
    recurse on smaller of [lo, storePos) and [storePos+1, hi); loop on the other
  insertionSort(arr, lo, hi)`,
    maxInput: LIMIT_FAST, maxViz: VIZ, benchSizes: FAST,
  },
  {
    id: 'quick', name: 'Quick sort (3-way)', rank: 3, family: 'Divide & conquer (partition)',
    summary: 'Pick a random element as the pivot, split the array into three blocks (smaller than, equal to, and larger than the pivot; Dijkstra 3-way partitioning), then sort the smaller and larger blocks the same way.',
    why: 'Usually the fastest pure comparison sort in practice thanks to cache-friendly in-place partitioning; the 3-way variant handles duplicates in linear time. Worst case is still O(n²) (very unlikely with random pivots).',
    best: 'O(n)', avg: 'O(n log n)', worst: 'O(n²)', space: 'O(log n)', stable: false, inPlace: true, growth: 'nlogn',
    suitable: 'Large arrays of primitives in memory, especially with many duplicate keys (3-way).',
    bad: 'Adversarial inputs against a fixed pivot rule, or when stability / a hard worst-case bound is required.',
    uses: ['Building block of introsort / pdqsort', 'Java Arrays.sort for primitives (dual-pivot quicksort)', 'C qsort implementations'],
    steps: [
      "Work on the range lo..hi (at first, the whole array). If it has fewer than two elements, it is already sorted.",
      "Pick a random element as the pivot and move it to the front of the range.",
      "Move i from left to right over the range and compare each element with the pivot. Elements smaller than the pivot are swapped into the \"less\" block at the left (less end grows by one). Elements larger than the pivot are swapped into the \"greater\" block at the right (greater start moves one left). Elements equal to the pivot stay in the middle.",
      "When i passes greater start, the range is split into three blocks: smaller than the pivot, equal to the pivot (already in their final place), and larger than the pivot.",
      "Sort the less and greater blocks the same way (the smaller block first, to keep the recursion shallow).",
    ],
    pseudocode: `quick3(arr, lo, hi):
  if hi ≤ lo: return
  swap arr[lo], arr[random index in lo..hi]
  pivot ← arr[lo]
  lessEnd ← lo; i ← lo + 1; greaterStart ← hi
  while i ≤ greaterStart:
    if arr[i] < pivot: swap arr[lessEnd], arr[i]; lessEnd++; i++
    else if arr[i] > pivot: swap arr[i], arr[greaterStart]; greaterStart--
    else: i++
  quick3(arr, lo, lessEnd - 1)
  quick3(arr, greaterStart + 1, hi)`,
    maxInput: LIMIT_FAST, maxViz: VIZ, benchSizes: FAST,
  },
  {
    id: 'merge', name: 'Merge sort', rank: 4, family: 'Divide & conquer (merge)',
    summary: 'Top-down recursion: split the range lo..hi at mid, sort the left half lo..mid and then the right half mid + 1..hi recursively, then merge the two sorted halves.',
    why: 'Stable with a guaranteed O(n log n) worst case and very predictable; needs O(n) extra memory and does not adapt to presorted input (Timsort fixes that).',
    best: 'O(n log n)', avg: 'O(n log n)', worst: 'O(n log n)', space: 'O(n)', stable: true, inPlace: false, growth: 'nlogn',
    suitable: 'Stable sorting, linked lists, external (on-disk) sorting, parallel sorting.',
    bad: 'Memory-constrained environments (O(n) buffer) and tiny arrays (recursion overhead).',
    uses: ['External sorting of huge files', 'Sorting linked lists', 'Counting inversions', 'GNU sort'],
    steps: [
      "Start with one call on the whole array: lo = 0, hi = n - 1 (n = number of elements).",
      "Divide: if the range lo..hi has one element (lo = hi), it is already sorted (the base case). Otherwise compute mid = lo + (hi - lo) / 2, rounded down.",
      "Sort the left half lo..mid with a recursive call first, then the right half mid + 1..hi. Each call splits again, so the recursion goes deeper until every range has one element.",
      "Conquer: when both halves of a call are sorted, merge them. leftPos walks the left half, rightPos walks the right half, and the smaller of the two values is written at writePos (the left one on ties, so the sort is stable).",
      "Copy whatever remains of either half. The call returns, and its parent merges the next level up, until the first call merges 0..mid with mid + 1..n - 1.",
    ],
    pseudocode: `mergeSort(arr, lo, hi):          // first call: mergeSort(arr, 0, n - 1)
  if lo >= hi: return              // one element: already sorted
  mid ← lo + (hi - lo) / 2         // rounded down
  mergeSort(arr, lo, mid)          // sort the left half
  mergeSort(arr, mid + 1, hi)      // sort the right half
  merge(arr, lo, mid, hi)

merge(arr, lo, mid, hi):           // halves lo..mid and mid + 1..hi are sorted
  leftPos ← lo; rightPos ← mid + 1
  for writePos ← lo to hi:
    if rightPos > hi or (leftPos ≤ mid and arr[leftPos] ≤ arr[rightPos]):
      temp[writePos] ← arr[leftPos]; leftPos ← leftPos + 1
    else: temp[writePos] ← arr[rightPos]; rightPos ← rightPos + 1
  copy temp[lo..hi] to arr[lo..hi]`,
    maxInput: LIMIT_FAST, maxViz: VIZ, benchSizes: FAST,
  },
  {
    id: 'heap', name: 'Heap sort', rank: 5, family: 'Selection via binary heap',
    summary: 'Build a max-heap in the array, then repeatedly swap the maximum to the end and restore the heap.',
    why: 'Guaranteed O(n log n) with O(1) extra space, but poor cache locality makes it 2-3x slower than quicksort in practice, and it is unstable.',
    best: 'O(n log n)', avg: 'O(n log n)', worst: 'O(n log n)', space: 'O(1)', stable: false, inPlace: true, growth: 'nlogn',
    suitable: 'Hard real-time or memory-constrained systems that need a worst-case bound with no extra memory; partial sorting / top-k.',
    bad: 'Large arrays on modern CPUs (cache misses), and when stability is needed.',
    uses: ['Introsort fallback', 'Priority queues / top-k selection', 'Embedded systems (Linux kernel lib/sort.c)'],
    steps: [
      "Heapify (n = number of elements): sift down every parent node from n/2 - 1 to 0, so every node ≥ its children.",
      "Swap the root (maximum) with the element at heapEnd, the last slot of the heap; that slot is now final and heapEnd moves left.",
      "Sift the new root down: compare the node with its larger child and swap while the child is bigger.",
      "Repeat until the heap has one element.",
    ],
    pseudocode: `heapSort(arr):
  for node ← n/2 - 1 downto 0: siftDown(arr, node, n)
  for heapEnd ← n - 1 downto 1:
    swap arr[0], arr[heapEnd]
    siftDown(arr, 0, heapEnd)    // heap is now arr[0..heapEnd)

siftDown(arr, node, size):
  while 2·node + 1 < size:
    child ← larger of the children of node
    if arr[node] ≥ arr[child]: return
    swap arr[node], arr[child]; node ← child`,
    maxInput: LIMIT_FAST, maxViz: VIZ, benchSizes: FAST,
  },
  {
    id: 'radix', name: 'Radix sort (LSD)', rank: 6, family: 'Non-comparison (digit distribution)',
    summary: 'Sort by one byte (digit) at a time from least to most significant, using a stable counting pass per digit.',
    why: 'Linear time O(n·k) (n = number of elements, k = number of byte digits per key) for fixed-width integer keys and often the fastest option for large integer arrays, but only works for keys that decompose into digits.',
    best: 'O(n·k)', avg: 'O(n·k)', worst: 'O(n·k)', space: 'O(n + b)', stable: true, inPlace: false, growth: 'nk',
    suitable: 'Large arrays of integers or fixed-length strings (k = number of digits, b = radix 256 here).',
    bad: 'Floating point or arbitrary comparison-based keys; small arrays where the per-pass overhead dominates; very wide keys.',
    uses: ['GPU sorting (CUB, Thrust)', 'Suffix-array construction', 'Sorting IP addresses / fixed-width IDs', 'Database column stores'],
    steps: [
      'Offset every value by the minimum so keys are non-negative.',
      'For each byte position from the lowest: count how many keys have each byte value (0-255).',
      'Prefix-sum the counts into starting positions and place each key stably into an output buffer.',
      'Swap buffers and continue with the next byte until the highest non-zero byte of the max key.',
      'Add the minimum back.',
    ],
    pseudocode: `radixLSD(arr):
  for each index i: key[i] ← arr[i] - min(arr)
  for shift ← 0, 8, 16, ... while (maxKey >> shift) > 0:
    count[0..256] ← 0
    for each keyValue in key: count[digit(keyValue, shift) + 1]++   // digit = (keyValue >> shift) & 255
    prefix-sum count            // count[digit] = first output slot for that digit
    for each keyValue in key: output[count[digit(keyValue, shift)]++] ← keyValue
    swap key, output
  for each index i: arr[i] ← key[i] + min(arr)`,
    maxInput: LIMIT_FAST, maxViz: VIZ, benchSizes: FAST,
  },
  {
    id: 'counting', name: 'Counting sort', rank: 7, family: 'Non-comparison (counting)',
    summary: 'Count how many times each value occurs, then write the values back in order.',
    why: 'O(n + k) (n = number of elements, k = max - min + 1, the size of the value range) and extremely fast when k is small, but memory grows with the range so it is useless for wide keys (this site limits max - min to under 1,000,000).',
    best: 'O(n + k)', avg: 'O(n + k)', worst: 'O(n + k)', space: 'O(k)', stable: true, inPlace: false, growth: 'n',
    suitable: 'Integers in a small known range: ages, grades, bytes, histogram buckets.',
    bad: 'Large value ranges (k ≫ n) or non-integer keys.',
    uses: ['Building block of radix sort', 'Sorting bytes / characters', 'Histogram equalisation in image processing'],
    steps: [
      "Find the minimum and maximum value; k = max - min + 1.",
      "Allocate k counters and count occurrences of each value.",
      "Walk the counters in increasing order and write each value at writePos as many times as it was counted.",
    ],
    pseudocode: `countingSort(arr):
  lo ← min(arr); hi ← max(arr)
  count[0..hi-lo] ← 0
  for value in arr: count[value - lo]++
  writePos ← 0
  for offset ← 0 to hi - lo:
    repeat count[offset] times: arr[writePos++] ← offset + lo`,
    maxInput: LIMIT_FAST, maxViz: VIZ, benchSizes: FAST,
  },
  {
    id: 'bucket', name: 'Bucket sort', rank: 8, family: 'Non-comparison (distribution)',
    summary: 'Scatter values into n buckets by value range, sort each bucket with insertion sort, then concatenate.',
    why: 'Expected O(n + k) (n = number of elements, k = number of buckets, here k = n) for uniformly distributed data, but skewed data piles into a few buckets and degrades to O(n²) (insertion sort inside a bucket).',
    best: 'O(n + k)', avg: 'O(n + k)', worst: 'O(n²)', space: 'O(n + k)', stable: true, inPlace: false, growth: 'n',
    suitable: 'Uniformly distributed keys (e.g. random floats in [0, 1)) and as a parallel / external sorting stage.',
    bad: 'Clustered or skewed distributions, where many values land in the same bucket.',
    uses: ['Sorting uniformly distributed floats', 'Histogram-based parallel sorts (sample sort)', 'Graphics: depth bucketing'],
    steps: [
      'Find min and max. Each value goes to bucket number (value - min) · n / (max - min + 1), where n = number of elements (also the number of buckets).',
      'Append every value to its bucket.',
      'Sort each bucket with insertion sort (buckets are small on uniform data).',
      'Concatenate the buckets in order.',
    ],
    pseudocode: `bucketSort(arr):
  lo ← min(arr); range ← max(arr) - lo + 1
  buckets[0..n-1] ← empty lists
  for value in arr: append value to buckets[(value - lo) · n / range]
  for each bucket: insertionSort(bucket)
  arr ← buckets[0] + buckets[1] + ... + buckets[n-1]`,
    maxInput: LIMIT_FAST, maxViz: VIZ, benchSizes: FAST,
  },
  {
    id: 'shell', name: 'Shell sort', rank: 9, family: 'Insertion (diminishing gaps)',
    summary: 'Insertion sort over elements a gap apart, with the gap shrinking (Ciura sequence 701, 301, 132, 57, 23, 10, 4, 1).',
    why: 'Simple, in place, no recursion and surprisingly fast for medium-sized arrays (roughly O(n^1.3) in practice, n = number of elements), but no proven O(n log n) bound and unstable.',
    best: 'O(n log n)', avg: '≈ O(n^1.3) (gap dependent)', worst: 'O(n^1.5) or worse', space: 'O(1)', stable: false, inPlace: true, growth: 'n32',
    suitable: 'Embedded systems and medium-sized arrays where code size and no-recursion matter.',
    bad: 'Very large arrays (falls behind O(n log n) sorts) and when stability is needed.',
    uses: ['uClibc qsort', 'bzip2 compressor', 'Embedded firmware'],
    steps: [
      "Choose a decreasing gap sequence ending in 1.",
      "For each gap: do an insertion sort where the key (taken from current) is compared with the element gap positions to the left of the hole.",
      "Large gaps move far-away elements quickly; the final gap = 1 pass is a plain insertion sort on nearly sorted data.",
    ],
    pseudocode: `shellSort(arr):
  for gap in [..., 701, 301, 132, 57, 23, 10, 4, 1] with gap < n:
    for current ← gap to n - 1:
      key ← arr[current]; hole ← current
      while hole ≥ gap and key < arr[hole - gap]:
        arr[hole] ← arr[hole - gap]; hole ← hole - gap
      arr[hole] ← key`,
    maxInput: LIMIT_FAST, maxViz: VIZ, benchSizes: FAST,
  },
  {
    id: 'comb', name: 'Comb sort', rank: 10, family: 'Exchange (shrinking gap)',
    summary: 'Bubble sort that compares elements a gap apart, shrinking the gap by 1.3 each pass to kill "turtles" (small values near the end).',
    why: 'Much faster than bubble sort (close to O(n log n) on random data) with tiny code, but O(n²) worst case and unstable.',
    best: 'O(n log n)', avg: 'Ω(n² / 2^p), p = number of gap shrinks; ≈ n log n in practice', worst: 'O(n²)', space: 'O(1)', stable: false, inPlace: true, growth: 'nlogn',
    suitable: 'When you need something tiny and much better than bubble sort.',
    bad: 'Large data sets where real O(n log n) sorts win, and stability requirements.',
    uses: ['Teaching gap-based improvements', 'Tiny embedded code'],
    steps: [
      "Start with gap = n, the number of elements.",
      "Each pass: gap ← floor(gap / 1.3) (at least 1); compare-and-swap every pair (left, right = left + gap).",
      "Stop after a pass with gap = 1 that made no swaps.",
    ],
    pseudocode: `combSort(arr):
  gap ← n; sorted ← false
  while not sorted:
    gap ← floor(gap / 1.3)
    if gap ≤ 1: gap ← 1; sorted ← true
    for left ← 0 to n - gap - 1:
      right ← left + gap
      if arr[right] < arr[left]:
        swap arr[left], arr[right]; sorted ← false`,
    maxInput: LIMIT_FAST, maxViz: VIZ, benchSizes: FAST,
  },
  {
    id: 'bitonic', name: 'Bitonic sort', rank: 11, family: 'Sorting network',
    summary: 'Recursively build bitonic sequences (ascending then descending) and merge them with a fixed pattern of compare-exchanges.',
    why: 'Data-independent compare pattern is ideal for GPUs, SIMD and hardware, but O(n log² n) comparisons make it slower than O(n log n) sorts on a CPU.',
    best: 'O(n log² n)', avg: 'O(n log² n)', worst: 'O(n log² n)', space: 'O(log n) recursion', stable: false, inPlace: true, growth: 'nlog2n',
    suitable: 'Parallel hardware: GPUs, FPGAs, SIMD lanes, sorting networks.',
    bad: 'Sequential CPU code, where the extra log factor costs real time.',
    uses: ['GPU sorting kernels', 'Hardware sorting networks', 'SIMD sorting of small blocks'],
    steps: [
      'Sort the first half ascending-reversed (descending) and the second half ascending, recursively; together they form a bitonic sequence.',
      'Bitonic merge: let distance = the largest power of two below the length; compare-exchange each element left with the element distance positions to its right, in the requested direction.',
      'Recursively bitonic-merge both parts. This generalisation works for any number of elements, not just powers of two.',
    ],
    pseudocode: `bitonicSort(arr, lo, count, ascending):   // sort count elements starting at lo
  if count ≤ 1: return
  half ← count / 2
  bitonicSort(arr, lo, half, not ascending)
  bitonicSort(arr, lo + half, count - half, ascending)
  bitonicMerge(arr, lo, count, ascending)

bitonicMerge(arr, lo, count, ascending):
  if count ≤ 1: return
  distance ← greatest power of two < count
  for left ← lo to lo + count - distance - 1:
    if (arr[left] > arr[left + distance]) = ascending: swap arr[left], arr[left + distance]
  bitonicMerge(arr, lo, distance, ascending)
  bitonicMerge(arr, lo + distance, count - distance, ascending)`,
    maxInput: LIMIT_FAST, maxViz: VIZ, benchSizes: FAST,
  },
  {
    id: 'insertion', name: 'Insertion sort', rank: 12, family: 'Insertion',
    summary: 'Grow a sorted prefix by taking the next element and shifting larger elements right until its slot is found.',
    why: 'The best O(n²) sort: stable, in place, adaptive (O(n) on nearly sorted data) and the fastest choice for tiny arrays, which is why hybrids use it.',
    best: 'O(n)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)', stable: true, inPlace: true, growth: 'n2',
    suitable: 'Small arrays (< ~20-50 elements), nearly sorted data, online sorting as items arrive.',
    bad: 'Large or reverse-ordered arrays (quadratic shifts).',
    uses: ['Small-range base case in Timsort, introsort, pdqsort', 'Online insertion into a sorted list', 'Card players sorting a hand'],
    steps: [
      "Treat arr[0] as a sorted part.",
      "Take the next element, current, out of the array: its value is the key and its slot becomes the hole.",
      "While the element left of the hole is larger than the key, shift it right into the hole; the hole moves one step left.",
      "Drop the key into the hole. The sorted part is one longer.",
    ],
    pseudocode: `insertionSort(arr):
  for current ← 1 to n - 1:
    key ← arr[current]; hole ← current
    while hole > 0 and key < arr[hole - 1]:
      arr[hole] ← arr[hole - 1]; hole ← hole - 1
    arr[hole] ← key`,
    maxInput: LIMIT_SLOW, maxViz: VIZ, benchSizes: SLOW,
  },
  {
    id: 'selection', name: 'Selection sort', rank: 13, family: 'Selection',
    summary: 'Repeatedly find the minimum of the unsorted suffix and swap it to the front.',
    why: 'Always about n²/2 comparisons (n = number of elements) (not adaptive) and unstable, but makes at most n - 1 swaps, which helps when writes are expensive.',
    best: 'O(n²)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)', stable: false, inPlace: true, growth: 'n2',
    suitable: 'Tiny arrays where swaps (writes) are much more expensive than comparisons.',
    bad: 'Anything large; it never benefits from presorted input.',
    uses: ['Teaching', 'Flash/EEPROM where writes wear the memory', 'Selecting the few smallest items (stop the outer loop early)'],
    steps: [
      "For each fillPos from left to right:",
      "move i over the unsorted part arr[fillPos..n) and remember minIndex, the index of the smallest value seen;",
      "swap arr[minIndex] into fillPos. That slot is now final.",
    ],
    pseudocode: `selectionSort(arr):
  for fillPos ← 0 to n - 2:
    minIndex ← fillPos
    for i ← fillPos + 1 to n - 1:
      if arr[i] < arr[minIndex]: minIndex ← i
    swap arr[fillPos], arr[minIndex]`,
    maxInput: LIMIT_SLOW, maxViz: VIZ, benchSizes: SLOW,
  },
  {
    id: 'cocktail', name: 'Cocktail shaker sort', rank: 14, family: 'Exchange',
    summary: 'Bubble sort that alternates forward and backward passes, moving large values right and small values left each round.',
    why: 'Slightly better than bubble sort (turtles move left fast) and stable/adaptive, but still O(n²) with lots of swaps.',
    best: 'O(n)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)', stable: true, inPlace: true, growth: 'n2',
    suitable: 'Teaching; nearly sorted data with a few misplaced elements at either end.',
    bad: 'Random or large data.',
    uses: ['Teaching bidirectional passes'],
    steps: [
      "Forward pass: move i from lo to hi, bubbling the largest unsorted value to hi.",
      "Backward pass: move i from hi back to lo, bubbling the smallest unsorted value to lo.",
      "Move lo right and hi left (everything outside lo..hi is final) and repeat until a full round makes no swap.",
    ],
    pseudocode: `cocktailSort(arr):
  lo ← 0; hi ← n - 1; swapped ← true
  while swapped and lo < hi:
    swapped ← false
    for i ← lo to hi - 1: if arr[i+1] < arr[i]: swap arr[i], arr[i+1]; swapped ← true
    hi ← hi - 1
    for i ← hi downto lo + 1: if arr[i] < arr[i-1]: swap arr[i], arr[i-1]; swapped ← true
    lo ← lo + 1`,
    maxInput: LIMIT_SLOW, maxViz: VIZ, benchSizes: SLOW,
  },
  {
    id: 'bubble', name: 'Bubble sort', rank: 15, family: 'Exchange',
    summary: 'Repeatedly swap adjacent out-of-order pairs; each pass bubbles the largest remaining value to the end.',
    why: 'Stable and adaptive with an early exit, but the most swaps of any common algorithm and poor practical speed.',
    best: 'O(n)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)', stable: true, inPlace: true, growth: 'n2',
    suitable: 'Teaching, or checking whether a tiny array is already sorted (one pass).',
    bad: 'Everything else, especially small values near the end ("turtles").',
    uses: ['Teaching', 'Detecting a nearly sorted array in one pass'],
    steps: [
      "Move i through the unsorted part, comparing each neighbouring pair arr[i - 1] and arr[i]; swap them if they are out of order.",
      "After a pass, the largest remaining value has bubbled to the end, so sortedFrom moves left: from sortedFrom to the end everything is final.",
      "Stop early if a pass makes no swaps.",
    ],
    pseudocode: `bubbleSort(arr):
  sortedFrom ← n
  while sortedFrom > 1:
    swapped ← false
    for i ← 1 to sortedFrom - 1:
      if arr[i] < arr[i - 1]: swap arr[i], arr[i - 1]; swapped ← true
    sortedFrom ← sortedFrom - 1
    if not swapped: break`,
    maxInput: LIMIT_SLOW, maxViz: VIZ, benchSizes: SLOW,
  },
  {
    id: 'odd-even', name: 'Odd-even sort', rank: 16, family: 'Exchange (parallel)',
    summary: 'Alternate compare-swap passes over odd-indexed pairs (1,2), (3,4)... and even-indexed pairs (0,1), (2,3)... until sorted.',
    why: 'Each phase is fully parallel (n/2 independent compare-swaps, n = number of elements), which suits SIMD/processor arrays, but sequentially it is as slow as bubble sort.',
    best: 'O(n)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)', stable: true, inPlace: true, growth: 'n2',
    suitable: 'Parallel processor arrays / meshes where each processor holds one element.',
    bad: 'Sequential code on large data.',
    uses: ['Parallel sorting on processor arrays', 'Teaching sorting networks'],
    steps: [
      "Odd phase: compare-swap the pairs starting at odd indexes: (1,2), (3,4), (5,6), ...",
      "Even phase: compare-swap the pairs starting at even indexes: (0,1), (2,3), (4,5), ...",
      "Repeat both phases until a full round makes no swap. pairStart marks the first element of the pair being compared.",
    ],
    pseudocode: `oddEvenSort(arr):
  sorted ← false
  while not sorted:
    sorted ← true
    for phase in [1, 0]:
      for pairStart ← phase; pairStart + 1 < n; pairStart ← pairStart + 2:
        if arr[pairStart+1] < arr[pairStart]:
          swap arr[pairStart], arr[pairStart+1]; sorted ← false`,
    maxInput: LIMIT_SLOW, maxViz: VIZ, benchSizes: SLOW,
  },
  {
    id: 'gnome', name: 'Gnome sort', rank: 17, family: 'Exchange (insertion-like)',
    summary: 'A garden gnome walks forward while pots are in order; when two are out of order he swaps them and steps back.',
    why: 'Conceptually insertion sort done with swaps: stable and adaptive but does about 3x the work of insertion sort.',
    best: 'O(n)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)', stable: true, inPlace: true, growth: 'n2',
    suitable: 'Teaching; extremely small code size.',
    bad: 'Any real workload.',
    uses: ['Teaching', 'Code-golf'],
    steps: [
      "The gnome starts at gnomePos = 0.",
      "If it is at the start or arr[gnomePos] ≥ arr[gnomePos - 1], it steps forward.",
      "Otherwise it swaps the two and steps back.",
      "Done when the gnome walks off the end.",
    ],
    pseudocode: `gnomeSort(arr):
  gnomePos ← 0
  while gnomePos < n:
    if gnomePos = 0 or arr[gnomePos] ≥ arr[gnomePos - 1]: gnomePos++
    else: swap arr[gnomePos], arr[gnomePos - 1]; gnomePos--`,
    maxInput: LIMIT_SLOW, maxViz: VIZ, benchSizes: SLOW,
  },
  {
    id: 'cycle', name: 'Cycle sort', rank: 18, family: 'Selection (cycle rotation)',
    summary: 'For each position, count how many elements are smaller to find where its item belongs, and rotate the whole permutation cycle into place.',
    why: 'Theoretically optimal number of memory writes (each element written at most once), but always Θ(n²) comparisons and unstable.',
    best: 'O(n²)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)', stable: false, inPlace: true, growth: 'n2',
    suitable: 'Memory where writes are extremely expensive (EEPROM, flash) and n is small.',
    bad: 'Anything where comparisons cost time: it is never adaptive.',
    uses: ['Minimising writes to flash / EEPROM', 'Finding the minimum swaps to sort a permutation'],
    steps: [
      "Pick up item = arr[cycleStart]; its targetPos is cycleStart + (the number of later elements smaller than it, counted by moving i over them).",
      "Skip past equal values, then put the item at targetPos and pick up the value that was there.",
      "Repeat for the carried value until the cycle returns to cycleStart.",
      "Move cycleStart to the next position.",
    ],
    pseudocode: `cycleSort(arr):
  for cycleStart ← 0 to n - 2:
    item ← arr[cycleStart]
    targetPos ← cycleStart + (number of indexes i > cycleStart with arr[i] < item)
    if targetPos = cycleStart: continue
    while item = arr[targetPos]: targetPos++
    swap item, arr[targetPos]
    while targetPos ≠ cycleStart:
      targetPos ← cycleStart + (number of indexes i > cycleStart with arr[i] < item)
      while item = arr[targetPos]: targetPos++
      if item ≠ arr[targetPos]: swap item, arr[targetPos]`,
    maxInput: LIMIT_SLOW, maxViz: VIZ, benchSizes: SLOW,
  },
  {
    id: 'pancake', name: 'Pancake sort', rank: 19, family: 'Selection (prefix reversal)',
    summary: 'Only allowed operation is "flip the top few pancakes": flip the largest to the top, then flip it to the bottom of the unsorted stack.',
    why: 'A puzzle-inspired sort: O(n) flips (n = number of elements) but each flip costs O(n) element moves, so O(n²) overall with heavy data movement.',
    best: 'O(n²)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)', stable: false, inPlace: true, growth: 'n2',
    suitable: 'When prefix reversal is the only primitive available (e.g. some hardware / genome rearrangement models).',
    bad: 'Any practical sorting task.',
    uses: ['Genome rearrangement research', 'Interconnection-network routing (pancake graphs)', 'Bill Gates\'s only research paper'],
    steps: [
      "The unsorted part is arr[0..lastUnsorted]; it starts as the whole array.",
      "move i over it to find maxIndex, the position of its largest value;",
      "flip the prefix ending at maxIndex (the maximum comes to the front), then flip the prefix ending at lastUnsorted (the maximum goes to lastUnsorted). lastUnsorted moves one left.",
    ],
    pseudocode: `pancakeSort(arr):
  for unsortedSize ← n downto 2:
    lastUnsorted ← unsortedSize - 1
    maxIndex ← index of max(arr[0..lastUnsorted])
    if maxIndex ≠ lastUnsorted:
      flip(arr, maxIndex)       // reverse arr[0..maxIndex]
      flip(arr, lastUnsorted)   // reverse arr[0..lastUnsorted]`,
    maxInput: LIMIT_SLOW, maxViz: VIZ, benchSizes: SLOW,
  },
  {
    id: 'bogo', name: 'Bogo sort', rank: 20, family: 'Randomised (joke)',
    summary: 'Check if the array is sorted; if not, shuffle it randomly and try again.',
    why: 'Expected O(n·n!) time (n = number of elements) and unbounded worst case: the canonical example of the worst possible sorting algorithm. Capped at 8 elements here.',
    best: 'O(n)', avg: 'O(n · n!)', worst: 'Unbounded', space: 'O(1)', stable: false, inPlace: true, growth: 'nfact',
    suitable: 'Jokes, teaching probability, and stress-testing a shuffle.',
    bad: 'Any input larger than a handful of elements.',
    uses: ['Teaching expected running time', 'Humour'],
    steps: [
      'If the array is sorted, stop.',
      'Otherwise shuffle it uniformly at random (Fisher-Yates) and go back to step 1.',
    ],
    pseudocode: `bogoSort(arr):
  while not isSorted(arr):
    for i ← n - 1 downto 1:
      other ← random index in 0..i
      swap arr[i], arr[other]`,
    maxInput: 8, maxViz: 7, benchSizes: [3, 4, 5, 6, 7],
  },
];

export const ALGO_BY_ID: Record<string, Algo> = Object.fromEntries(ALGORITHMS.map((a) => [a.id, a]));
