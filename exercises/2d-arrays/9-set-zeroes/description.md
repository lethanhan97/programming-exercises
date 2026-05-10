# Set Matrix Zeroes

Given an `m × n` matrix, mutate it so that **if any cell is `0`, the entire row and column it belongs to become `0`**.

This sounds simple, and the buggy version is *very* short — which is why this is such a famous trap. The whole point of the exercise is learning the discipline of **mark first, mutate second** when a transformation depends on the original state.

## The bug to avoid

The naïve approach: walk the matrix, and every time you see a zero, immediately zero its row and column.

```
// WRONG — single pass, mutating as you go
for (let r = 0; r < m; r++) {
  for (let c = 0; c < n; c++) {
    if (grid[r][c] === 0) {
      // zero out row r and column c
      for (let i = 0; i < n; i++) grid[r][i] = 0;
      for (let i = 0; i < m; i++) grid[i][c] = 0;
    }
  }
}
```

The bug: as soon as you zero a row, **every cell in that row is now `0`** — and the outer loop will keep visiting them and treating them as "original zeros," cascading until the entire matrix is zeroed.

The lesson is bigger than this exercise: when a transformation reads from the same data it writes to, you cannot safely interleave reads and writes. **First record what you need, then apply changes.**

## The fix — two passes

### Pass 1: collect

Walk the entire matrix. Record which rows contain a zero, and which columns contain a zero. Use two `Set`s (or two boolean arrays).

```
const zeroRows = new Set<number>();
const zeroCols = new Set<number>();
for (let r = 0; r < m; r++) {
  for (let c = 0; c < n; c++) {
    if (grid[r][c] === 0) {
      zeroRows.add(r);
      zeroCols.add(c);
    }
  }
}
```

### Pass 2: apply

Walk the matrix again. Zero any cell whose row is in `zeroRows` or whose column is in `zeroCols`.

```
for (let r = 0; r < m; r++) {
  for (let c = 0; c < n; c++) {
    if (zeroRows.has(r) || zeroCols.has(c)) {
      grid[r][c] = 0;
    }
  }
}
```

That's it. The first pass reads the original state without mutating anything; the second pass mutates without re-reading old decisions.

### Step by step

For:

```
[1, 2, 3]
[4, 0, 6]
[7, 8, 9]
```

Pass 1 finds zero at `(1, 1)` → `zeroRows = {1}`, `zeroCols = {1}`.

Pass 2:

- Row 1 is fully zeroed: `[?, 0, ?]` everywhere in row 1.
- Column 1 is fully zeroed: `(0,1)`, `(1,1)`, `(2,1)`.

Result:

```
[1, 0, 3]
[0, 0, 0]
[7, 0, 9]
```

## Complexity

- **Time:** O(m·n).
- **Space:** O(m + n) for the two sets. (There's a clever O(1)-space variant that uses the first row and column as the marker storage — feel free to attempt it after you've nailed the two-pass version.)

## Signature

```ts
setZeroes(grid: number[][]): void
```

- `grid` — a rectangular `m × n` matrix of numbers. Mutated in place.
- Returns nothing.
