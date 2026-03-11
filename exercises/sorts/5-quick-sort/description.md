# Quick Sort

Quick sort is an efficient, divide-and-conquer sorting algorithm and one of the most widely used in practice.

## How It Works

The core idea is: pick one element (the **pivot**), then separate everything else into two groups — things smaller than the pivot and things larger. The pivot is now in its final position. Repeat for each group.

### Step by step

Given `[3, 6, 2, 7, 1, 5]` with pivot `5`:

1. **Partition** — walk through the array and compare each element to the pivot:
   - Smaller than 5: `[3, 2, 1]`
   - Larger than 5: `[6, 7]`
   - Result: `[3, 2, 1]` **5** `[6, 7]` — the pivot is now in its correct place.

2. **Recurse** — apply the same process to `[3, 2, 1]` and `[6, 7]`. Each sub-array picks its own pivot and partitions again, until every sub-array has zero or one element (which is already sorted).

3. **Combine** — once recursion finishes, the array is sorted. No merge step is needed because elements were moved into the right positions during partitioning.

### Pivot choice

The pivot can be any element — first, last, middle, or random. A bad pivot (e.g., always the smallest or largest) produces lopsided partitions and degrades performance. A good pivot splits the array roughly in half.

## Complexity

- **Time:** O(n log n) on average. O(n²) in the worst case (consistently lopsided partitions).
- **Space:** O(log n) for the recursion stack on average.

## Signature

```ts
quickSort(arr: number[]): number[]
```

- `arr` — an array of numbers in any order.
- Returns a new sorted array in ascending order. The original array must not be modified.
