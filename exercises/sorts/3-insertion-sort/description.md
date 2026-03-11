# Insertion Sort

Insertion sort builds the sorted array one element at a time by inserting each new element into its correct position among the previously sorted elements.

## How It Works

Think of sorting a hand of playing cards. You pick up cards one at a time and insert each one into the correct position among the cards you're already holding.

The algorithm divides the array into a sorted portion (initially just the first element) and an unsorted portion (the rest). It takes the next element from the unsorted portion, then shifts elements in the sorted portion to the right until it finds the correct position for the new element, and places it there.

### Step by step

Given `[7, 3, 5, 1, 9]`:

1. Start: sorted `[7]`, unsorted `[3, 5, 1, 9]`.
2. Take `3`. Compare with `7` — `3 < 7`, shift `7` right, insert `3`.
   → `[3, 7, 5, 1, 9]`
3. Take `5`. Compare with `7` — `5 < 7`, shift `7` right. Compare with `3` — `5 > 3`, insert `5`.
   → `[3, 5, 7, 1, 9]`
4. Take `1`. Compare with `7` — shift. Compare with `5` — shift. Compare with `3` — shift. Insert `1` at the beginning.
   → `[1, 3, 5, 7, 9]`
5. Take `9`. Compare with `7` — `9 > 7`, already in place.
   → `[1, 3, 5, 7, 9]` — done.

## Complexity

- **Time:** O(n²) in the average and worst case. O(n) in the best case (already sorted).
- **Space:** O(1) — sorting is done in place (on a copy).

## Signature

```ts
insertionSort(arr: number[]): number[]
```

- `arr` — an array of numbers in any order.
- Returns a new sorted array in ascending order. The original array must not be modified.
