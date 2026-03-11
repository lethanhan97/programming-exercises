# Merge Sort

Merge sort is a divide-and-conquer sorting algorithm that produces a stable, sorted output.

## How It Works

The algorithm operates in two phases:

**Divide:** Split the array into two halves, then recursively sort each half. Keep splitting until each piece has one element (a single element is already sorted).

**Merge:** Combine two sorted halves into one sorted array. Compare the front elements of each half, take the smaller one, and repeat until both halves are fully merged.

The key insight is that merging two already-sorted sequences into one sorted sequence is efficient — you only ever compare the front elements.

### Step by step

Given `[38, 27, 43, 3, 9, 82, 10]`:

1. **Divide** into `[38, 27, 43]` and `[3, 9, 82, 10]`.
2. **Divide** `[38, 27, 43]` into `[38]` and `[27, 43]`.
3. **Divide** `[27, 43]` into `[27]` and `[43]`.
4. **Merge** `[27]` and `[43]` → `[27, 43]`.
5. **Merge** `[38]` and `[27, 43]` → compare 38 vs 27, take 27. Compare 38 vs 43, take 38. Take 43. → `[27, 38, 43]`.
6. **Divide** `[3, 9, 82, 10]` into `[3, 9]` and `[82, 10]`.
7. **Divide** and **merge** `[3, 9]` → `[3, 9]`. **Divide** and **merge** `[82, 10]` → `[10, 82]`.
8. **Merge** `[3, 9]` and `[10, 82]` → `[3, 9, 10, 82]`.
9. **Merge** `[27, 38, 43]` and `[3, 9, 10, 82]` → compare front elements repeatedly → `[3, 9, 10, 27, 38, 43, 82]`. Done.

## Complexity

- **Time:** O(n log n) — the array is split log n times, and each level of splits requires O(n) work to merge.
- **Space:** O(n) — temporary arrays are needed during merging.

## Signature

```ts
mergeSort(arr: number[]): number[]
```

- `arr` — an array of numbers in any order.
- Returns a new sorted array in ascending order. The original array must not be modified.
