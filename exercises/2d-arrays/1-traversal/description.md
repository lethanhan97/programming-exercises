# Traversal — Row by Row vs Column by Column

The single most important thing to internalize about a 2D array is **the order of the indices**. `grid[row][col]` is *not* the same as `grid[col][row]`. Which one you write determines whether you walk the matrix horizontally or vertically — and getting it wrong is the most common 2D-array bug.

This exercise asks for two traversal orders so you build the muscle memory for both.

## Visualizing a 2D array

A 2D array is an array of rows. Each row is itself an array of values.

```
const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

- `grid[0]` is the first row: `[1, 2, 3]`
- `grid[0][0]` is column 0 of row 0: `1`
- `grid[2][1]` is column 1 of row 2: `8`

The convention is **`grid[row][col]`** — outer index is the row, inner index is the column.

For an `m × n` grid: `m` rows, `n` columns. `grid.length === m`, `grid[0].length === n`.

## Row by row (row-major order)

Walk left-to-right across each row, top to bottom:

```
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]

→ [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

The outer loop is the **row** index, the inner loop is the **column** index:

```
for (let row = 0; row < m; row++) {
  for (let col = 0; col < n; col++) {
    visit(grid[row][col]);
  }
}
```

## Column by column (column-major order)

Walk top-to-bottom down each column, left to right:

```
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]

→ [1, 4, 7, 2, 5, 8, 3, 6, 9]
```

Now the outer loop is the **column** index — but the access is **still** `grid[row][col]`:

```
for (let col = 0; col < n; col++) {
  for (let row = 0; row < m; row++) {
    visit(grid[row][col]);
  }
}
```

The bug to avoid: writing `grid[col][row]` when you meant "column-major traversal." That swaps the meaning of the indices entirely and will crash (or silently break) on non-square matrices. The loop variables change which dimension is outer; the indices `[row][col]` are always the same.

## Signatures

```ts
traverseRowByRow(grid: number[][]): number[]
traverseColumnByColumn(grid: number[][]): number[]
```

- `grid` — a rectangular `m × n` matrix of numbers (`m, n ≥ 0`).
- Returns the elements in the visited order. The original grid must not be modified.
