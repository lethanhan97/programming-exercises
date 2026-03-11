# Heap Sort

Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure. It guarantees O(n log n) time in all cases.

## How It Works

The algorithm has two phases:

**Build a max-heap:** Arrange the array so it satisfies the max-heap property — every parent node is greater than or equal to its children. In a flat array, the children of the element at index `i` are at indices `2i + 1` and `2i + 2`.

**Extract maximums:** The root of a max-heap is always the largest element. Swap it with the last element, shrink the heap by one, and restore the heap property by "sifting down" the new root. Repeat until the heap is empty. Each extracted maximum lands in its correct sorted position at the end of the array.

### Step by step

Given `[4, 10, 3, 5, 1]`:

**Build max-heap** (start from the last parent and sift down):
- Array as tree: `4` is root, children `10` and `3`, then `5` and `1`.
- Sift index 1: `10` has children `5`, `1` — already valid.
- Sift index 0: `4` has children `10`, `3` — swap `4` and `10`. Then `4` has children `5`, `1` — swap `4` and `5`.
- Max-heap: `[10, 5, 3, 4, 1]`.

**Extract maximums:**
1. Swap root `10` with last element `1` → `[1, 5, 3, 4, | 10]`. Sift down `1` → `[5, 4, 3, 1, | 10]`.
2. Swap root `5` with `1` → `[1, 4, 3, | 5, 10]`. Sift down `1` → `[4, 1, 3, | 5, 10]`.
3. Swap root `4` with `3` → `[3, 1, | 4, 5, 10]`. Sift down `3` → `[3, 1, | 4, 5, 10]`.
4. Swap root `3` with `1` → `[1, | 3, 4, 5, 10]`. Done.
- Result: `[1, 3, 4, 5, 10]`.

## Complexity

- **Time:** O(n log n) in all cases — building the heap is O(n), and each of the n extractions takes O(log n).
- **Space:** O(1) — sorting is done in place (on a copy). No temporary arrays needed.

## Signature

```ts
heapSort(arr: number[]): number[]
```

- `arr` — an array of numbers in any order.
- Returns a new sorted array in ascending order. The original array must not be modified.
