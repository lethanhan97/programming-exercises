# Row Sums and Column Sums

Given an `m × n` matrix, return:

- `rowSums(grid)` — an array of length `m`, where the `i`th value is the sum of row `i`.
- `columnSums(grid)` — an array of length `n`, where the `j`th value is the sum of column `j`.

This is a great test of "**which loop is the outer loop?**" The two functions look almost identical, but the answer to that question flips between them.

## How It Works

### Row sums

For each row, sum every column inside it.

```
const result = [];
for (let row = 0; row < m; row++) {
  let total = 0;
  for (let col = 0; col < n; col++) {
    total += grid[row][col];
  }
  result.push(total);
}
return result;
```

The accumulator lives **inside** the outer (row) loop and is reset on each new row.

### Column sums

For each column, sum every row inside it. The outer loop is now `col`, the inner loop is `row` — but `grid[row][col]` stays the same.

```
const result = [];
for (let col = 0; col < n; col++) {
  let total = 0;
  for (let row = 0; row < m; row++) {
    total += grid[row][col];
  }
  result.push(total);
}
return result;
```

### Step by step

Given:

```
[1, 2, 3]
[4, 5, 6]
```

- Row 0 sum: `1 + 2 + 3 = 6`
- Row 1 sum: `4 + 5 + 6 = 15`
- → `rowSums` = `[6, 15]`

- Col 0 sum: `1 + 4 = 5`
- Col 1 sum: `2 + 5 = 7`
- Col 2 sum: `3 + 6 = 9`
- → `columnSums` = `[5, 7, 9]`

Notice the lengths: `rowSums` has length `m` (number of rows), `columnSums` has length `n` (number of columns).

## Complexity

- **Time:** O(m·n) for each function.
- **Space:** O(m) and O(n) respectively for the output.

## Signatures

```ts
rowSums(grid: number[][]): number[]
columnSums(grid: number[][]): number[]
```

- `grid` — a rectangular `m × n` matrix of numbers.
- Returns the array of sums. Empty grid returns `[]`. The original grid must not be modified.
