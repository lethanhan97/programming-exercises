# Find the Max

Given an `m × n` matrix, find the largest value and the `(row, col)` position where it lives.

This is a small but important step up from "sum all elements." Instead of one accumulator (the running total), you carry **three** pieces of state through the loop: the best value seen so far, and the row/col where you saw it. That pattern — track-the-best-as-you-go — comes up everywhere.

## How It Works

Initialize your "best so far" from the very first cell `(0, 0)`. Then walk the grid; whenever you see a value that beats the current best, update all three pieces of state together.

```
let value = grid[0][0];
let row = 0;
let col = 0;
for (let r = 0; r < m; r++) {
  for (let c = 0; c < n; c++) {
    if (grid[r][c] > value) {
      value = grid[r][c];
      row = r;
      col = c;
    }
  }
}
return { value, row, col };
```

The trap: forgetting to update `row` and `col` together with `value` — or updating one of them outside the `if` block.

### Why initialize from `(0, 0)` instead of `-Infinity`?

Both work for the value. But you also need a valid `row` and `col` — and `(0, 0)` is the natural starting position. Using `-Infinity` for the value would mean you have no meaningful position until the first comparison.

### Step by step

Given:

```
[1, 7, 3]
[4, 2, 9]
[8, 5, 6]
```

- Start: `value = 1`, `row = 0`, `col = 0`.
- Visit `(0, 1)`: `7 > 1` → `value = 7`, `row = 0`, `col = 1`.
- Visit `(0, 2)`: `3 > 7`? no.
- Visit `(1, 0)`: `4 > 7`? no.
- Visit `(1, 1)`: `2 > 7`? no.
- Visit `(1, 2)`: `9 > 7` → `value = 9`, `row = 1`, `col = 2`.
- Visit `(2, 0)`: `8 > 9`? no.
- Visit `(2, 1)`: `5 > 9`? no.
- Visit `(2, 2)`: `6 > 9`? no.

Return `{ value: 9, row: 1, col: 2 }`.

### Ties

If the same maximum value appears more than once, return the position of the **first** occurrence in row-major order — i.e., use a strict `>` comparison, not `>=`.

## Complexity

- **Time:** O(m·n).
- **Space:** O(1).

## Signature

```ts
findMax(grid: number[][]): { value: number; row: number; col: number }
```

- `grid` — a non-empty rectangular `m × n` matrix of numbers (you can assume at least one element exists).
- Returns the max value with its row and column index. The original grid must not be modified.
