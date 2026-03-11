# Bucket Sort

Bucket sort is a distribution-based sorting algorithm. It works by scattering elements into buckets by range, sorting each bucket individually, then concatenating the results.

## How It Works

**Distribute:** Create a set of empty buckets, each responsible for a sub-range of values. Scan the array and place each element into the appropriate bucket based on its value.

To decide which bucket an element goes into, normalize its position within the overall range:

```
bucketIndex = floor((value - min) / (max - min) * (bucketCount - 1))
```

This maps the minimum value to bucket 0 and the maximum value to the last bucket, with everything else spread evenly in between. The number of buckets is typically the length of the array.

**Sort each bucket:** Sort the elements within each bucket using any sorting method (e.g., insertion sort works well since buckets tend to be small).

**Concatenate:** Walk through the buckets in order and collect all elements back into a single array.

### Step by step

Given `[29, 5, 47, 18, 32, 11]` with 6 buckets:

- Min = 5, max = 47, range = 42, bucketCount = 6.
- Formula: `floor((value - 5) / 42 * 5)`

1. **Distribute** — compute each element's bucket:
   - `29`: `floor((29 - 5) / 42 * 5)` = `floor(2.86)` = bucket 2
   - `5`: `floor((5 - 5) / 42 * 5)` = `floor(0)` = bucket 0
   - `47`: `floor((47 - 5) / 42 * 5)` = `floor(5)` = bucket 5
   - `18`: `floor((18 - 5) / 42 * 5)` = `floor(1.55)` = bucket 1
   - `32`: `floor((32 - 5) / 42 * 5)` = `floor(3.21)` = bucket 3
   - `11`: `floor((11 - 5) / 42 * 5)` = `floor(0.71)` = bucket 0

   Result:
   - Bucket 0: `[5, 11]`
   - Bucket 1: `[18]`
   - Bucket 2: `[29]`
   - Bucket 3: `[32]`
   - Bucket 4: `[]`
   - Bucket 5: `[47]`

2. **Sort each bucket** — each bucket here has 0–2 elements, already sorted.

3. **Concatenate:** `[5, 11]` + `[18]` + `[29]` + `[32]` + `[]` + `[47]` = `[5, 11, 18, 29, 32, 47]`. Done.

## Complexity

- **Time:** O(n + k) on average when data is uniformly distributed (k = number of buckets). O(n²) in the worst case (all elements land in one bucket).
- **Space:** O(n + k) — for the buckets.

## Signature

```ts
bucketSort(arr: number[]): number[]
```

- `arr` — an array of numbers in any order.
- Returns a new sorted array in ascending order. The original array must not be modified.
