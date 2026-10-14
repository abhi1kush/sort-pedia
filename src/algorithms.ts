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
      'Pick MINRUN between 32 and 64 so that n / MINRUN is close to a power of two.',
      'Scan left to right for a natural run: an ascending or strictly descending sequence (reverse descending runs).',
      'If the run is shorter than MINRUN, extend it with binary insertion sort.',
      'Push the run onto a stack; while the top runs violate the size invariants (A > B + C and B > C), merge adjacent runs.',
      'At the end, merge everything left on the stack. Merges take from the left run on ties, keeping the sort stable.',
    ],
    pseudocode: `timsort(A):
  minrun ← computeMinRun(n)
  runs ← empty stack
  lo ← 0
  while lo < n:
    hi ← end of natural run starting at lo
    if run is strictly descending: reverse A[lo..hi)
    end ← max(hi, min(n, lo + minrun))
    binaryInsertionSort(A, lo, hi, end)
    push (lo, end - lo) on runs
    mergeCollapse(runs)       // keep |A| > |B|+|C|, |B| > |C|
    lo ← end
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
      'Set a depth limit of about 2·log2(n).',
      'While the range has more than 16 elements: if the depth limit hits 0, heapsort this range and stop.',
      'Otherwise choose the median of first, middle and last as pivot and partition around it.',
      'Recurse into the smaller side and loop on the larger one (bounded stack).',
      'Finish small ranges with insertion sort.',
    ],
    pseudocode: `introsort(A, lo, hi, depth):
  while hi - lo > 16:
    if depth = 0:
      heapsort(A, lo, hi); return
    depth ← depth - 1
    p ← partition(A, lo, hi, medianOf3(lo, mid, hi-1))
    recurse on smaller of [lo, p) and [p+1, hi); loop on the other
  insertionSort(A, lo, hi)`,
    maxInput: LIMIT_FAST, maxViz: VIZ, benchSizes: FAST,
  },
  {
    id: 'quick', name: 'Quick sort (3-way)', rank: 3, family: 'Divide & conquer (partition)',
    summary: 'Pick a random pivot and partition into < pivot, = pivot and > pivot (Dijkstra 3-way), then recurse on the outer parts.',
    why: 'Usually the fastest pure comparison sort in practice thanks to cache-friendly in-place partitioning; the 3-way variant handles duplicates in linear time. Worst case is still O(n²) (very unlikely with random pivots).',
    best: 'O(n)', avg: 'O(n log n)', worst: 'O(n²)', space: 'O(log n)', stable: false, inPlace: true, growth: 'nlogn',
    suitable: 'Large arrays of primitives in memory, especially with many duplicate keys (3-way).',
    bad: 'Adversarial inputs against a fixed pivot rule, or when stability / a hard worst-case bound is required.',
    uses: ['Building block of introsort / pdqsort', 'Java Arrays.sort for primitives (dual-pivot quicksort)', 'C qsort implementations'],
    steps: [
      'If the range has fewer than two elements, stop.',
      'Choose a random pivot v and move it to the front.',
      'Scan with three pointers lt, i, gt: values < v go left of lt, values > v go right of gt, equal values stay in the middle.',
      'Recurse on the smaller outer part and loop on the larger one; the middle (= v) block is already in place.',
    ],
    pseudocode: `quick3(A, lo, hi):
  if hi ≤ lo: return
  swap A[lo], A[random(lo..hi)]
  v ← A[lo]; lt ← lo; i ← lo + 1; gt ← hi
  while i ≤ gt:
    if A[i] < v: swap A[lt++], A[i++]
    else if A[i] > v: swap A[i], A[gt--]
    else: i++
  quick3(A, lo, lt - 1)
  quick3(A, gt + 1, hi)`,
    maxInput: LIMIT_FAST, maxViz: VIZ, benchSizes: FAST,
  },
  {
    id: 'merge', name: 'Merge sort', rank: 4, family: 'Divide & conquer (merge)',
    summary: 'Split the array in half, sort each half recursively, then merge the two sorted halves.',
    why: 'Stable with a guaranteed O(n log n) worst case and very predictable; needs O(n) extra memory and does not adapt to presorted input (Timsort fixes that).',
    best: 'O(n log n)', avg: 'O(n log n)', worst: 'O(n log n)', space: 'O(n)', stable: true, inPlace: false, growth: 'nlogn',
    suitable: 'Stable sorting, linked lists, external (on-disk) sorting, parallel sorting.',
    bad: 'Memory-constrained environments (O(n) buffer) and tiny arrays (recursion overhead).',
    uses: ['External sorting of huge files', 'Sorting linked lists', 'Counting inversions', 'GNU sort'],
    steps: [
      'If the range has fewer than two elements, it is sorted.',
      'Split it at the midpoint and sort both halves recursively.',
      'Merge: repeatedly take the smaller head of the two halves (the left one on ties, for stability) into a buffer.',
      'Copy the buffer back.',
    ],
    pseudocode: `mergeSort(A, lo, hi):
  if hi - lo < 2: return
  mid ← (lo + hi) / 2
  mergeSort(A, lo, mid); mergeSort(A, mid, hi)
  i ← lo; j ← mid
  for k in lo..hi-1:
    if j ≥ hi or (i < mid and A[i] ≤ A[j]): T[k] ← A[i++]
    else: T[k] ← A[j++]
  copy T[lo..hi) to A[lo..hi)`,
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
      'Heapify: sift down every internal node from n/2 - 1 to 0, so every parent ≥ its children.',
      'Swap the root (maximum) with the last element of the heap; the heap shrinks by one.',
      'Sift the new root down to restore the heap property.',
      'Repeat until the heap has one element.',
    ],
    pseudocode: `heapSort(A):
  for i ← n/2 - 1 downto 0: siftDown(A, i, n)
  for end ← n - 1 downto 1:
    swap A[0], A[end]
    siftDown(A, 0, end)

siftDown(A, root, n):
  while 2·root + 1 < n:
    child ← larger of the children of root
    if A[root] ≥ A[child]: return
    swap A[root], A[child]; root ← child`,
    maxInput: LIMIT_FAST, maxViz: VIZ, benchSizes: FAST,
  },
  {
    id: 'radix', name: 'Radix sort (LSD)', rank: 6, family: 'Non-comparison (digit distribution)',
    summary: 'Sort by one byte (digit) at a time from least to most significant, using a stable counting pass per digit.',
    why: 'Linear time O(n·k) for fixed-width integer keys and often the fastest option for large integer arrays, but only works for keys that decompose into digits.',
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
    pseudocode: `radixLSD(A):
  key[i] ← A[i] - min(A)
  for shift ← 0, 8, 16, ... while (maxKey >> shift) > 0:
    count[0..256] ← 0
    for k in key: count[((k >> shift) & 255) + 1]++
    prefix-sum count
    for k in key: out[count[(k >> shift) & 255]++] ← k
    swap key, out
  A[i] ← key[i] + min(A)`,
    maxInput: LIMIT_FAST, maxViz: VIZ, benchSizes: FAST,
  },
  {
    id: 'counting', name: 'Counting sort', rank: 7, family: 'Non-comparison (counting)',
    summary: 'Count how many times each value occurs, then write the values back in order.',
    why: 'O(n + k) and extremely fast when the value range k is small, but memory grows with the range so it is useless for wide keys (this site limits max - min to under 1,000,000).',
    best: 'O(n + k)', avg: 'O(n + k)', worst: 'O(n + k)', space: 'O(k)', stable: true, inPlace: false, growth: 'n',
    suitable: 'Integers in a small known range: ages, grades, bytes, histogram buckets.',
    bad: 'Large value ranges (k ≫ n) or non-integer keys.',
    uses: ['Building block of radix sort', 'Sorting bytes / characters', 'Histogram equalisation in image processing'],
    steps: [
      'Find the minimum and maximum value; k = max - min + 1.',
      'Allocate k counters and count occurrences of each value.',
      'Walk the counters in increasing order and write each value as many times as it was counted.',
    ],
    pseudocode: `countingSort(A):
  lo ← min(A); hi ← max(A)
  count[0..hi-lo] ← 0
  for v in A: count[v - lo]++
  k ← 0
  for v ← 0 to hi - lo:
    repeat count[v] times: A[k++] ← v + lo`,
    maxInput: LIMIT_FAST, maxViz: VIZ, benchSizes: FAST,
  },
  {
    id: 'bucket', name: 'Bucket sort', rank: 8, family: 'Non-comparison (distribution)',
    summary: 'Scatter values into n buckets by value range, sort each bucket with insertion sort, then concatenate.',
    why: 'Expected O(n) for uniformly distributed data, but skewed data piles into a few buckets and degrades to O(n²) (insertion sort inside a bucket).',
    best: 'O(n + k)', avg: 'O(n + k)', worst: 'O(n²)', space: 'O(n + k)', stable: true, inPlace: false, growth: 'n',
    suitable: 'Uniformly distributed keys (e.g. random floats in [0, 1)) and as a parallel / external sorting stage.',
    bad: 'Clustered or skewed distributions, where many values land in the same bucket.',
    uses: ['Sorting uniformly distributed floats', 'Histogram-based parallel sorts (sample sort)', 'Graphics: depth bucketing'],
    steps: [
      'Find min and max; bucket index of v = (v - min) · n / (max - min + 1).',
      'Append every value to its bucket.',
      'Sort each bucket with insertion sort (buckets are small on uniform data).',
      'Concatenate the buckets in order.',
    ],
    pseudocode: `bucketSort(A):
  lo ← min(A); range ← max(A) - lo + 1
  B[0..n-1] ← empty lists
  for v in A: append v to B[(v - lo) · n / range]
  for each bucket b: insertionSort(b)
  A ← concatenation of B[0], B[1], ..., B[n-1]`,
    maxInput: LIMIT_FAST, maxViz: VIZ, benchSizes: FAST,
  },
  {
    id: 'shell', name: 'Shell sort', rank: 9, family: 'Insertion (diminishing gaps)',
    summary: 'Insertion sort over elements a gap apart, with the gap shrinking (Ciura sequence 701, 301, 132, 57, 23, 10, 4, 1).',
    why: 'Simple, in place, no recursion and surprisingly fast for medium n (roughly O(n^1.3) in practice), but no proven O(n log n) bound and unstable.',
    best: 'O(n log n)', avg: '≈ O(n^1.3) (gap dependent)', worst: 'O(n^1.5) or worse', space: 'O(1)', stable: false, inPlace: true, growth: 'n32',
    suitable: 'Embedded systems and medium-sized arrays where code size and no-recursion matter.',
    bad: 'Very large arrays (falls behind O(n log n) sorts) and when stability is needed.',
    uses: ['uClibc qsort', 'bzip2 compressor', 'Embedded firmware'],
    steps: [
      'Choose a decreasing gap sequence ending in 1.',
      'For each gap g: do an insertion sort where each element is compared with the one g positions earlier.',
      'Large gaps move far-away elements quickly; the final g = 1 pass is a plain insertion sort on nearly sorted data.',
    ],
    pseudocode: `shellSort(A):
  for g in [..., 701, 301, 132, 57, 23, 10, 4, 1] with g < n:
    for i ← g to n - 1:
      key ← A[i]; j ← i
      while j ≥ g and key < A[j - g]:
        A[j] ← A[j - g]; j ← j - g
      A[j] ← key`,
    maxInput: LIMIT_FAST, maxViz: VIZ, benchSizes: FAST,
  },
  {
    id: 'comb', name: 'Comb sort', rank: 10, family: 'Exchange (shrinking gap)',
    summary: 'Bubble sort that compares elements a gap apart, shrinking the gap by 1.3 each pass to kill "turtles" (small values near the end).',
    why: 'Much faster than bubble sort (close to O(n log n) on random data) with tiny code, but O(n²) worst case and unstable.',
    best: 'O(n log n)', avg: 'Ω(n² / 2^p) ≈ n log n in practice', worst: 'O(n²)', space: 'O(1)', stable: false, inPlace: true, growth: 'nlogn',
    suitable: 'When you need something tiny and much better than bubble sort.',
    bad: 'Large data sets where real O(n log n) sorts win, and stability requirements.',
    uses: ['Teaching gap-based improvements', 'Tiny embedded code'],
    steps: [
      'Start with gap = n.',
      'Each pass: gap ← floor(gap / 1.3) (at least 1); compare-and-swap every pair (i, i + gap).',
      'Stop after a pass with gap = 1 that made no swaps.',
    ],
    pseudocode: `combSort(A):
  gap ← n; sorted ← false
  while not sorted:
    gap ← floor(gap / 1.3)
    if gap ≤ 1: gap ← 1; sorted ← true
    for i ← 0 to n - gap - 1:
      if A[i + gap] < A[i]:
        swap A[i], A[i + gap]; sorted ← false`,
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
      'Bitonic merge: with m = largest power of two below the length, compare-exchange element i with i + m in the requested direction.',
      'Recursively bitonic-merge both parts. This generalisation works for any n, not just powers of two.',
    ],
    pseudocode: `bitonicSort(A, lo, n, up):
  if n ≤ 1: return
  m ← n / 2
  bitonicSort(A, lo, m, not up)
  bitonicSort(A, lo + m, n - m, up)
  bitonicMerge(A, lo, n, up)

bitonicMerge(A, lo, n, up):
  if n ≤ 1: return
  m ← greatest power of two < n
  for i ← lo to lo + n - m - 1:
    if (A[i] > A[i + m]) = up: swap A[i], A[i + m]
  bitonicMerge(A, lo, m, up); bitonicMerge(A, lo + m, n - m, up)`,
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
      'Treat A[0] as a sorted prefix.',
      'For each next element (the key), shift every larger element of the prefix one slot right.',
      'Drop the key into the gap. The prefix is one longer and still sorted.',
    ],
    pseudocode: `insertionSort(A):
  for i ← 1 to n - 1:
    key ← A[i]; j ← i
    while j > 0 and key < A[j - 1]:
      A[j] ← A[j - 1]; j ← j - 1
    A[j] ← key`,
    maxInput: LIMIT_SLOW, maxViz: VIZ, benchSizes: SLOW,
  },
  {
    id: 'selection', name: 'Selection sort', rank: 13, family: 'Selection',
    summary: 'Repeatedly find the minimum of the unsorted suffix and swap it to the front.',
    why: 'Always n²/2 comparisons (not adaptive) and unstable, but makes at most n - 1 swaps, which helps when writes are expensive.',
    best: 'O(n²)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)', stable: false, inPlace: true, growth: 'n2',
    suitable: 'Tiny arrays where swaps (writes) are much more expensive than comparisons.',
    bad: 'Anything large; it never benefits from presorted input.',
    uses: ['Teaching', 'Flash/EEPROM where writes wear the memory', 'Selecting the k smallest items (partial run)'],
    steps: [
      'For each position i from left to right:',
      'scan the unsorted suffix A[i..n) to find the index of its minimum;',
      'swap that minimum into position i.',
    ],
    pseudocode: `selectionSort(A):
  for i ← 0 to n - 2:
    m ← i
    for j ← i + 1 to n - 1:
      if A[j] < A[m]: m ← j
    swap A[i], A[m]`,
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
      'Forward pass: bubble the largest unsorted value to the right end.',
      'Backward pass: bubble the smallest unsorted value to the left end.',
      'Shrink both ends and repeat until a full round makes no swap.',
    ],
    pseudocode: `cocktailSort(A):
  lo ← 0; hi ← n - 1; swapped ← true
  while swapped and lo < hi:
    swapped ← false
    for i ← lo to hi - 1: if A[i+1] < A[i]: swap; swapped ← true
    hi ← hi - 1
    for i ← hi downto lo + 1: if A[i] < A[i-1]: swap; swapped ← true
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
      'Walk the array comparing each adjacent pair; swap if out of order.',
      'After a pass, the largest remaining value is at the end, so the next pass can stop one earlier.',
      'Stop early if a pass makes no swaps.',
    ],
    pseudocode: `bubbleSort(A):
  for end ← n downto 2:
    swapped ← false
    for i ← 1 to end - 1:
      if A[i] < A[i - 1]: swap A[i], A[i - 1]; swapped ← true
    if not swapped: break`,
    maxInput: LIMIT_SLOW, maxViz: VIZ, benchSizes: SLOW,
  },
  {
    id: 'odd-even', name: 'Odd-even sort', rank: 16, family: 'Exchange (parallel)',
    summary: 'Alternate compare-swap passes over odd-indexed pairs (1,2), (3,4)... and even-indexed pairs (0,1), (2,3)... until sorted.',
    why: 'Each phase is fully parallel (n/2 independent compare-swaps), which suits SIMD/processor arrays, but sequentially it is as slow as bubble sort.',
    best: 'O(n)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)', stable: true, inPlace: true, growth: 'n2',
    suitable: 'Parallel processor arrays / meshes where each processor holds one element.',
    bad: 'Sequential code on large data.',
    uses: ['Parallel sorting on processor arrays', 'Teaching sorting networks'],
    steps: [
      'Odd phase: compare-swap pairs (1,2), (3,4), (5,6), ...',
      'Even phase: compare-swap pairs (0,1), (2,3), (4,5), ...',
      'Repeat both phases until a full round makes no swap.',
    ],
    pseudocode: `oddEvenSort(A):
  sorted ← false
  while not sorted:
    sorted ← true
    for start in [1, 0]:
      for i ← start; i + 1 < n; i ← i + 2:
        if A[i+1] < A[i]: swap A[i], A[i+1]; sorted ← false`,
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
      'Start at index 0.',
      'If at the start or A[i] ≥ A[i-1], step forward.',
      'Otherwise swap A[i] and A[i-1] and step back.',
      'Done when the gnome walks off the end.',
    ],
    pseudocode: `gnomeSort(A):
  i ← 0
  while i < n:
    if i = 0 or A[i] ≥ A[i - 1]: i ← i + 1
    else: swap A[i], A[i - 1]; i ← i - 1`,
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
      'Take item = A[start]; its final position is start + (number of later elements smaller than it).',
      'Skip past equal values, then write the item there and pick up the value that was displaced.',
      'Repeat for the displaced value until the cycle returns to start.',
      'Move on to the next start position.',
    ],
    pseudocode: `cycleSort(A):
  for start ← 0 to n - 2:
    item ← A[start]
    pos ← start + count of A[j] < item for j > start
    if pos = start: continue
    while item = A[pos]: pos++
    swap item, A[pos]
    while pos ≠ start:
      pos ← start + count of A[j] < item for j > start
      while item = A[pos]: pos++
      if item ≠ A[pos]: swap item, A[pos]`,
    maxInput: LIMIT_SLOW, maxViz: VIZ, benchSizes: SLOW,
  },
  {
    id: 'pancake', name: 'Pancake sort', rank: 19, family: 'Selection (prefix reversal)',
    summary: 'Only allowed operation is "flip the top k pancakes": flip the largest to the top, then flip it to the bottom of the unsorted stack.',
    why: 'A puzzle-inspired sort: O(n) flips but each flip costs O(n) element moves, so O(n²) overall with heavy data movement.',
    best: 'O(n²)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)', stable: false, inPlace: true, growth: 'n2',
    suitable: 'When prefix reversal is the only primitive available (e.g. some hardware / genome rearrangement models).',
    bad: 'Any practical sorting task.',
    uses: ['Genome rearrangement research', 'Interconnection-network routing (pancake graphs)', 'Bill Gates\'s only research paper'],
    steps: [
      'For size = n down to 2:',
      'find the index of the maximum within the first size elements;',
      'flip the prefix ending there (maximum goes to the front), then flip the first size elements (maximum goes to position size - 1).',
    ],
    pseudocode: `pancakeSort(A):
  for size ← n downto 2:
    mi ← index of max(A[0..size))
    if mi ≠ size - 1:
      flip(A, mi)        // reverse A[0..mi]
      flip(A, size - 1)  // reverse A[0..size-1]`,
    maxInput: LIMIT_SLOW, maxViz: VIZ, benchSizes: SLOW,
  },
  {
    id: 'bogo', name: 'Bogo sort', rank: 20, family: 'Randomised (joke)',
    summary: 'Check if the array is sorted; if not, shuffle it randomly and try again.',
    why: 'Expected O(n·n!) time and unbounded worst case: the canonical example of the worst possible sorting algorithm. Capped at 8 elements here.',
    best: 'O(n)', avg: 'O(n · n!)', worst: 'Unbounded', space: 'O(1)', stable: false, inPlace: true, growth: 'nfact',
    suitable: 'Jokes, teaching probability, and stress-testing a shuffle.',
    bad: 'Any input larger than a handful of elements.',
    uses: ['Teaching expected running time', 'Humour'],
    steps: [
      'If the array is sorted, stop.',
      'Otherwise shuffle it uniformly at random (Fisher-Yates) and go back to step 1.',
    ],
    pseudocode: `bogoSort(A):
  while not isSorted(A):
    for i ← n - 1 downto 1:
      j ← random(0..i)
      swap A[i], A[j]`,
    maxInput: 8, maxViz: 7, benchSizes: [3, 4, 5, 6, 7],
  },
];

export const ALGO_BY_ID: Record<string, Algo> = Object.fromEntries(ALGORITHMS.map((a) => [a.id, a]));
