# Bubble Sort

Bubble sort is a simple comparison-based sorting algorithm. It's one of the easiest to understand but among the least efficient for large datasets.

## How It Works

The algorithm repeatedly steps through the array, comparing adjacent pairs of elements. If a pair is in the wrong order, the two elements are swapped. After each full pass, the largest unsorted element "bubbles up" to its correct position at the end.

This process repeats until a full pass is made with no swaps, which means the array is sorted.

### Step by step

Given `[5, 3, 8, 1, 2]`:

**Pass 1** — compare each adjacent pair, swap if needed:
- `[5, 3, 8, 1, 2]` → compare 5, 3 → swap → `[3, 5, 8, 1, 2]`
- `[3, 5, 8, 1, 2]` → compare 5, 8 → ok → `[3, 5, 8, 1, 2]`
- `[3, 5, 8, 1, 2]` → compare 8, 1 → swap → `[3, 5, 1, 8, 2]`
- `[3, 5, 1, 8, 2]` → compare 8, 2 → swap → `[3, 5, 1, 2, 8]`
- `8` is now in its final position.

**Pass 2:**
- `[3, 5, 1, 2, 8]` → compare 3, 5 → ok → `[3, 5, 1, 2, 8]`
- `[3, 5, 1, 2, 8]` → compare 5, 1 → swap → `[3, 1, 5, 2, 8]`
- `[3, 1, 5, 2, 8]` → compare 5, 2 → swap → `[3, 1, 2, 5, 8]`
- `5` is now in its final position.

**Pass 3:**
- `[3, 1, 2, 5, 8]` → compare 3, 1 → swap → `[1, 3, 2, 5, 8]`
- `[1, 3, 2, 5, 8]` → compare 3, 2 → swap → `[1, 2, 3, 5, 8]`
- `3` is now in its final position.

**Pass 4:**
- `[1, 2, 3, 5, 8]` → compare 1, 2 → ok.
- No swaps made — array is sorted. Done.

## Complexity

- **Time:** O(n²) in the average and worst case. O(n) in the best case (already sorted, with early termination).
- **Space:** O(1) — sorting is done in place (on a copy).

## Signature

```ts
bubbleSort(arr: number[]): number[]
```

- `arr` — an array of numbers in any order.
- Returns a new sorted array in ascending order. The original array must not be modified.
