# Sum of All Elements

Given an `m × n` matrix of numbers, return the sum of every element.

This is the simplest "double loop" exercise — a single accumulator that touches every cell exactly once. The pattern shows up everywhere: counting, averaging, scoring, image processing.

## How It Works

Initialize a running total to `0`. Walk every row, and inside each row, walk every column. Add `grid[row][col]` to the total each time.

```
let total = 0;
for (let row = 0; row < m; row++) {
  for (let col = 0; col < n; col++) {
    total += grid[row][col];
  }
}
return total;
```

### Step by step

Given:

```
[1, 2, 3]
[4, 5, 6]
```

- Visit `(0, 0)` → total = 1
- Visit `(0, 1)` → total = 3
- Visit `(0, 2)` → total = 6
- Visit `(1, 0)` → total = 10
- Visit `(1, 1)` → total = 15
- Visit `(1, 2)` → total = 21

Return `21`.

## Complexity

- **Time:** O(m·n) — every cell is visited once.
- **Space:** O(1).

## Signature

```ts
sumAll(grid: number[][]): number
```

- `grid` — a rectangular `m × n` matrix of numbers.
- Returns the sum of all elements. Empty matrix returns `0`. The original grid must not be modified.
