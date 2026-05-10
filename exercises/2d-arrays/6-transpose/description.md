# Transpose a Square Matrix In Place

The **transpose** of a matrix swaps rows and columns: row 0 becomes column 0, row 1 becomes column 1, and so on. Geometrically, it is a reflection across the main diagonal.

```
[1, 2, 3]            [1, 4, 7]
[4, 5, 6]    ─→      [2, 5, 8]
[7, 8, 9]            [3, 6, 9]
```

The cell at `(row, col)` ends up at `(col, row)`. In other words, after the transpose, `result[col][row] === original[row][col]`.

For a square `n × n` matrix, this can be done **in place** — i.e., mutating the input directly without allocating a new matrix.

## How It Works

Walk only the cells **above** the main diagonal — those where `col > row` — and swap each one with its mirror across the diagonal:

```
for (let row = 0; row < n; row++) {
  for (let col = row + 1; col < n; col++) {
    [grid[row][col], grid[col][row]] = [grid[col][row], grid[row][col]];
  }
}
```

### The classic bug to avoid

The most common mistake is doing this:

```
// WRONG
for (let row = 0; row < n; row++) {
  for (let col = 0; col < n; col++) {
    [grid[row][col], grid[col][row]] = [grid[col][row], grid[row][col]];
  }
}
```

This swaps every pair **twice** — once as `(row, col)` and again as `(col, row)` later in the loop — so you end up with the original matrix. The fix is to constrain the inner loop to `col > row` (or equivalently `col < row`), so each pair is swapped exactly once.

### Step by step

For:

```
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]
```

- `(row=0, col=1)`: swap `grid[0][1]` (2) with `grid[1][0]` (4):
  ```
  [1, 4, 3]
  [2, 5, 6]
  [7, 8, 9]
  ```
- `(row=0, col=2)`: swap `grid[0][2]` (3) with `grid[2][0]` (7):
  ```
  [1, 4, 7]
  [2, 5, 6]
  [3, 8, 9]
  ```
- `(row=1, col=2)`: swap `grid[1][2]` (6) with `grid[2][1]` (8):
  ```
  [1, 4, 7]
  [2, 5, 8]
  [3, 6, 9]
  ```

Done.

## Complexity

- **Time:** O(n²) — visit roughly half the cells.
- **Space:** O(1) — no extra matrix allocated.

## Signature

```ts
transposeInPlace(grid: number[][]): void
```

- `grid` — a square `n × n` matrix of numbers. Mutated in place.
- Returns nothing. The function should not return a new matrix; it modifies the input directly.
