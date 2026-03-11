# Binary Search

Binary search is a search algorithm that finds the position of a target value within a **sorted** array.

## How It Works

The algorithm maintains a search range within the array. At each step, it examines the middle element of the current range:

- If the middle element equals the target, the search is done.
- If the middle element is less than the target, the target must be in the upper half of the range.
- If the middle element is greater than the target, the target must be in the lower half of the range.

The search range is halved with every step. If the range becomes empty, the target is not in the array.

### Step by step

Given `[2, 5, 8, 12, 16, 23, 38, 56, 72, 91]`, searching for `23`:

1. Range is indices 0–9. Middle is index 4: `16`. Target `23 > 16` — search upper half.
2. Range is indices 5–9. Middle is index 7: `56`. Target `23 < 56` — search lower half.
3. Range is indices 5–6. Middle is index 5: `23`. Target `23 = 23` — found at index `5`.

Only 3 comparisons for an array of 10 elements.

Searching for `10`:

1. Range is indices 0–9. Middle is index 4: `16`. Target `10 < 16` — search lower half.
2. Range is indices 0–3. Middle is index 1: `5`. Target `10 > 5` — search upper half.
3. Range is indices 2–3. Middle is index 2: `8`. Target `10 > 8` — search upper half.
4. Range is index 3. Middle is index 3: `12`. Target `10 < 12` — search lower half.
5. Range is empty — return `-1`.

## Complexity

- **Time:** O(log n) — the search space halves each step.
- **Space:** O(1) — only a few pointers are needed.

## Signature

```ts
binarySearch(arr: number[], target: number): number
```

- `arr` — a sorted array of numbers in ascending order.
- `target` — the number to search for.
- Returns the index of `target` in `arr`, or `-1` if not found.
