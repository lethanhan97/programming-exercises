# Selection Sort

Selection sort divides the array into a sorted and an unsorted portion, and repeatedly selects the smallest element from the unsorted portion to append to the sorted portion.

## How It Works

The algorithm scans the entire unsorted portion to find the minimum element, then swaps it with the first unsorted element. This grows the sorted portion by one element. The process repeats until the unsorted portion is empty.

Unlike insertion sort, selection sort always does the same number of comparisons regardless of the initial order. It minimizes the number of swaps — each element is swapped at most once.

### Step by step

Given `[29, 10, 14, 37, 13]`:

1. Scan all elements. Minimum is `10` (index 1). Swap with index 0.
   → `[10, 29, 14, 37, 13]`
2. Scan indices 1–4. Minimum is `13` (index 4). Swap with index 1.
   → `[10, 13, 14, 37, 29]`
3. Scan indices 2–4. Minimum is `14` (index 2). Already in place.
   → `[10, 13, 14, 37, 29]`
4. Scan indices 3–4. Minimum is `29` (index 4). Swap with index 3.
   → `[10, 13, 14, 29, 37]`
5. One element left — it's already in place. Done.

## Complexity

- **Time:** O(n²) in all cases — finding the minimum requires scanning the unsorted portion each time.
- **Space:** O(1) — sorting is done in place (on a copy).

## Signature

```ts
selectionSort(arr: number[]): number[]
```

- `arr` — an array of numbers in any order.
- Returns a new sorted array in ascending order. The original array must not be modified.
