import { test, expect, describe } from "bun:test";
import { flipHorizontal, flipVertical } from "./index";

describe("flipHorizontal", () => {
  test("flips a 3x3 matrix horizontally", () => {
    expect(
      flipHorizontal([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toEqual([
      [3, 2, 1],
      [6, 5, 4],
      [9, 8, 7],
    ]);
  });

  test("flips a wide rectangular matrix", () => {
    expect(
      flipHorizontal([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
      ]),
    ).toEqual([
      [4, 3, 2, 1],
      [8, 7, 6, 5],
    ]);
  });

  test("flips a tall rectangular matrix", () => {
    expect(
      flipHorizontal([
        [1, 2],
        [3, 4],
        [5, 6],
      ]),
    ).toEqual([
      [2, 1],
      [4, 3],
      [6, 5],
    ]);
  });

  test("flips a single-row matrix", () => {
    expect(flipHorizontal([[1, 2, 3, 4]])).toEqual([[4, 3, 2, 1]]);
  });

  test("flips a single-column matrix (no change)", () => {
    expect(flipHorizontal([[1], [2], [3]])).toEqual([[1], [2], [3]]);
  });

  test("flips a 1x1 matrix", () => {
    expect(flipHorizontal([[42]])).toEqual([[42]]);
  });

  test("flipping twice returns the original matrix", () => {
    const original = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    expect(flipHorizontal(flipHorizontal(original))).toEqual(original);
  });

  test("does not modify the original grid", () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const snapshot = JSON.stringify(grid);
    flipHorizontal(grid);
    expect(JSON.stringify(grid)).toEqual(snapshot);
  });

  test("returned rows do not share references with input rows", () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const result = flipHorizontal(grid);
    result[0][0] = 999;
    expect(grid[0][2]).toBe(3);
  });
});

describe("flipVertical", () => {
  test("flips a 3x3 matrix vertically", () => {
    expect(
      flipVertical([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toEqual([
      [7, 8, 9],
      [4, 5, 6],
      [1, 2, 3],
    ]);
  });

  test("flips a wide rectangular matrix", () => {
    expect(
      flipVertical([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
      ]),
    ).toEqual([
      [5, 6, 7, 8],
      [1, 2, 3, 4],
    ]);
  });

  test("flips a tall rectangular matrix", () => {
    expect(
      flipVertical([
        [1, 2],
        [3, 4],
        [5, 6],
      ]),
    ).toEqual([
      [5, 6],
      [3, 4],
      [1, 2],
    ]);
  });

  test("flips a single-row matrix (no change)", () => {
    expect(flipVertical([[1, 2, 3, 4]])).toEqual([[1, 2, 3, 4]]);
  });

  test("flips a single-column matrix", () => {
    expect(flipVertical([[1], [2], [3]])).toEqual([[3], [2], [1]]);
  });

  test("flips a 1x1 matrix", () => {
    expect(flipVertical([[42]])).toEqual([[42]]);
  });

  test("flipping twice returns the original matrix", () => {
    const original = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    expect(flipVertical(flipVertical(original))).toEqual(original);
  });

  test("does not modify the original grid", () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const snapshot = JSON.stringify(grid);
    flipVertical(grid);
    expect(JSON.stringify(grid)).toEqual(snapshot);
  });

  test("returned rows do not share references with input rows", () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const result = flipVertical(grid);
    result[0][0] = 999;
    expect(grid[1][0]).toBe(4);
  });
});
