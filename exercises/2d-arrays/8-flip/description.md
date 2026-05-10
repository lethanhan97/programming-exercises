# Flip Horizontally and Vertically

Two simple mirror transformations that show up constantly in graphics, image processing, and game boards. They're also a great warm-up for rotation: each one is "half" of a rotate.

This exercise asks for both:

- **`flipHorizontal(grid)`** — mirror across the vertical axis (left ↔ right). Each row is reversed.
- **`flipVertical(grid)`** — mirror across the horizontal axis (top ↔ bottom). The order of rows is reversed.

Both return a **new** matrix; the input must not be modified.

## Flip horizontally

Each row gets reversed. The leftmost column becomes the rightmost.

```
[1, 2, 3]            [3, 2, 1]
[4, 5, 6]    ─→      [6, 5, 4]
[7, 8, 9]            [9, 8, 7]
```

In index terms: `result[row][col] = grid[row][n - 1 - col]`.

```
const m = grid.length;
const n = grid[0].length;
const result = [];
for (let row = 0; row < m; row++) {
  const newRow = [];
  for (let col = 0; col < n; col++) {
    newRow.push(grid[row][n - 1 - col]);
  }
  result.push(newRow);
}
return result;
```

## Flip vertically

The top row swaps with the bottom row. Each individual row is unchanged — only their order is reversed.

```
[1, 2, 3]            [7, 8, 9]
[4, 5, 6]    ─→      [4, 5, 6]
[7, 8, 9]            [1, 2, 3]
```

In index terms: `result[row][col] = grid[m - 1 - row][col]`.

```
const m = grid.length;
const result = [];
for (let row = 0; row < m; row++) {
  result.push([...grid[m - 1 - row]]);
}
return result;
```

Why the spread `[...grid[...]]`? Because each inner array is a reference. If you push the same reference, modifying `result` later would also modify `grid`. Always copy.

## The trap

It is easy to confuse the two — especially the names. Remember:

- "Flip **horizontal**" = mirror along the **horizontal direction**, i.e. left↔right. Reverses the column order.
- "Flip **vertical**" = mirror along the **vertical direction**, i.e. top↔bottom. Reverses the row order.

(Different libraries use different conventions; some name them by the axis of symmetry instead. We're using the "direction of mirroring" convention here.)

## Complexity

- **Time:** O(m·n) for both.
- **Space:** O(m·n) for the output.

## Signatures

```ts
flipHorizontal(grid: number[][]): number[][]
flipVertical(grid: number[][]): number[][]
```

- `grid` — a rectangular `m × n` matrix of numbers.
- Returns a new matrix. The original grid must not be modified, and result rows must not share references with input rows.
