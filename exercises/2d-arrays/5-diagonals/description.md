# Diagonals

Given an `n × n` square matrix, return its two diagonals as arrays.

The diagonals are not just trivia — they show up in chess engines, image kernels, dynamic programming tables, and lots of geometric problems. The exercise is short but it forces you to think about a *non-trivial* relationship between `row` and `col` instead of two independent loops.

## The two diagonals

### Main diagonal

The cells where **`row === col`**. Going from the top-left corner to the bottom-right.

```
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]
```

The main diagonal is `[1, 5, 9]`. Indices visited: `(0,0)`, `(1,1)`, `(2,2)`.

```
for (let i = 0; i < n; i++) {
  result.push(grid[i][i]);
}
```

### Anti-diagonal

The cells where **`row + col === n - 1`**. Going from the top-right corner to the bottom-left.

```
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]
```

The anti-diagonal is `[3, 5, 7]`. Indices visited: `(0,2)`, `(1,1)`, `(2,0)`.

```
for (let i = 0; i < n; i++) {
  result.push(grid[i][n - 1 - i]);
}
```

The trick is the `n - 1 - i`. As `row` goes from `0` to `n-1`, `col` goes from `n-1` to `0` — they sum to `n-1` at every step.

### Step by step (anti-diagonal, n = 4)

For:

```
[ 1,  2,  3,  4]
[ 5,  6,  7,  8]
[ 9, 10, 11, 12]
[13, 14, 15, 16]
```

- `i = 0`: `grid[0][3]` = `4`
- `i = 1`: `grid[1][2]` = `7`
- `i = 2`: `grid[2][1]` = `10`
- `i = 3`: `grid[3][0]` = `13`

Result: `[4, 7, 10, 13]`.

## Complexity

- **Time:** O(n) — only one cell per row.
- **Space:** O(n) for the output.

## Signatures

```ts
mainDiagonal(grid: number[][]): number[]
antiDiagonal(grid: number[][]): number[]
```

- `grid` — a square `n × n` matrix of numbers (you can assume `grid` is square).
- Returns the diagonal elements in order from top to bottom. Empty grid returns `[]`. The original grid must not be modified.
