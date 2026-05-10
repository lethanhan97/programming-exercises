# Rotate 90° Clockwise

A rite of passage for 2D-array exercises. Given an `n × n` square matrix, rotate it 90 degrees clockwise. You'll do it twice:

1. **`rotate(grid)`** — return a *new* rotated matrix. The original is untouched.
2. **`rotateInPlace(grid)`** — mutate the input directly, allocating no new matrix.

The first version trains your indexing math. The second version teaches a beautiful trick.

## What "rotate 90° clockwise" means

The top row becomes the rightmost column. The leftmost column becomes the top row. And so on.

```
[1, 2, 3]            [7, 4, 1]
[4, 5, 6]    ─→      [8, 5, 2]
[7, 8, 9]            [9, 6, 3]
```

In index terms: cell `(row, col)` in the original ends up at `(col, n - 1 - row)` in the rotated version. Equivalently, `result[col][n - 1 - row] = original[row][col]`.

## Approach 1 — using a new matrix

Allocate a new `n × n` matrix and fill it using the index formula:

```
const n = grid.length;
const result = Array.from({ length: n }, () => new Array(n));
for (let row = 0; row < n; row++) {
  for (let col = 0; col < n; col++) {
    result[col][n - 1 - row] = grid[row][col];
  }
}
return result;
```

This is straightforward but uses O(n²) extra space.

## Approach 2 — in place (the trick)

Rotating in place looks intimidating, but there's a famous two-step trick:

> **Transpose, then reverse each row.**

```
Step 1: Transpose                Step 2: Reverse each row
[1, 2, 3]      [1, 4, 7]            [7, 4, 1]
[4, 5, 6]  ──→ [2, 5, 8]    ──→     [8, 5, 2]
[7, 8, 9]      [3, 6, 9]            [9, 6, 3]
```

Both steps work in place: transpose is the swap-above-the-diagonal trick from the previous exercise, and reversing a row is just a left/right swap.

```
// 1. Transpose (swap across the main diagonal)
for (let row = 0; row < n; row++) {
  for (let col = row + 1; col < n; col++) {
    [grid[row][col], grid[col][row]] = [grid[col][row], grid[row][col]];
  }
}
// 2. Reverse each row
for (let row = 0; row < n; row++) {
  grid[row].reverse(); // or do it manually with two pointers
}
```

### Why does that work?

- After **transpose**, cell `(row, col)` holds `original[col][row]`.
- After **reversing row `row`**, the value at column `col` came from column `n - 1 - col` of the transposed matrix, which is `original[n - 1 - col][row]`.
- That's exactly the formula for a 90° clockwise rotation.

## Complexity

- **`rotate`:** O(n²) time, O(n²) space.
- **`rotateInPlace`:** O(n²) time, O(1) space.

## Signatures

```ts
rotate(grid: number[][]): number[][]
rotateInPlace(grid: number[][]): void
```

- `grid` — a square `n × n` matrix of numbers.
- `rotate` returns a new rotated matrix and leaves the original unchanged.
- `rotateInPlace` mutates the input and returns nothing.
