# Linear Search

Linear search is the simplest search algorithm. It checks each element in sequence until the target is found or the end of the array is reached.

## How It Works

Start from the first element and compare each element with the target value, one by one. If a match is found, return its index. If the end of the array is reached without a match, the target is not present.

Unlike binary search, linear search does **not** require the array to be sorted.

### Step by step

Given `[30, 10, 50, 20, 40]`, searching for `50`:

1. Compare index 0: `30` — not a match.
2. Compare index 1: `10` — not a match.
3. Compare index 2: `50` — match found, return `2`.

Searching for `15`:

1. Compare index 0: `30` — not a match.
2. Compare index 1: `10` — not a match.
3. Compare index 2: `50` — not a match.
4. Compare index 3: `20` — not a match.
5. Compare index 4: `40` — not a match.
6. End of array reached — return `-1`.

## Complexity

- **Time:** O(n) — in the worst case, every element is checked.
- **Space:** O(1) — no extra memory is needed.

## Signature

```ts
linearSearch(arr: number[], target: number): number
```

- `arr` — an array of numbers (not necessarily sorted).
- `target` — the number to search for.
- Returns the index of the **first occurrence** of `target` in `arr`, or `-1` if not found.
