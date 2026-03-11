# Jump Search

Jump search is a search algorithm for **sorted** arrays that works by jumping ahead in fixed-size blocks, then performing a linear search within the relevant block.

## How It Works

Instead of scanning every element, jump search skips ahead by a fixed step size. Once the current block's boundary exceeds the target (or the array ends), the algorithm knows the target must lie within the previous block. It then performs a linear scan backward through that block to find the exact position.

The optimal step size is the square root of the array length. This balances the number of jumps with the number of linear comparisons in the final block.

### Step by step

Given `[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]` (12 elements), searching for `55`:

Step size = √12 ≈ 3.

1. **Jump phase** — check block boundaries:
   - Index 0: `0` — too small, jump.
   - Index 3: `2` — too small, jump.
   - Index 6: `8` — too small, jump.
   - Index 9: `34` — too small, jump.
   - Index 11 (end): `89` — overshot. Target is in block indices 9–11.
2. **Linear phase** — scan from index 9:
   - Index 9: `34` — not a match.
   - Index 10: `55` — match found, return `10`.

## Complexity

- **Time:** O(√n) — at most √n jumps plus √n linear comparisons.
- **Space:** O(1) — only a few variables are needed.

## Signature

```ts
jumpSearch(arr: number[], target: number): number
```

- `arr` — a sorted array of numbers in ascending order.
- `target` — the number to search for.
- Returns the index of `target` in `arr`, or `-1` if not found.
