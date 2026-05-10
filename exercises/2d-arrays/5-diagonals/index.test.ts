import { test, expect, describe } from "bun:test";
import { mainDiagonal, antiDiagonal } from "./index";

describe("mainDiagonal", () => {
  test("returns the main diagonal of a 3x3 matrix", () => {
    expect(
      mainDiagonal([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toEqual([1, 5, 9]);
  });

  test("returns the main diagonal of a 4x4 matrix", () => {
    expect(
      mainDiagonal([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ]),
    ).toEqual([1, 6, 11, 16]);
  });

  test("returns the main diagonal of a 2x2 matrix", () => {
    expect(
      mainDiagonal([
        [1, 2],
        [3, 4],
      ]),
    ).toEqual([1, 4]);
  });

  test("returns the main diagonal of a 1x1 matrix", () => {
    expect(mainDiagonal([[42]])).toEqual([42]);
  });

  test("returns empty array for an empty matrix", () => {
    expect(mainDiagonal([])).toEqual([]);
  });

  test("does not modify the original grid", () => {
    const grid = [
      [1, 2],
      [3, 4],
    ];
    const snapshot = JSON.stringify(grid);
    mainDiagonal(grid);
    expect(JSON.stringify(grid)).toEqual(snapshot);
  });
});

describe("antiDiagonal", () => {
  test("returns the anti-diagonal of a 3x3 matrix", () => {
    expect(
      antiDiagonal([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toEqual([3, 5, 7]);
  });

  test("returns the anti-diagonal of a 4x4 matrix", () => {
    expect(
      antiDiagonal([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ]),
    ).toEqual([4, 7, 10, 13]);
  });

  test("returns the anti-diagonal of a 2x2 matrix", () => {
    expect(
      antiDiagonal([
        [1, 2],
        [3, 4],
      ]),
    ).toEqual([2, 3]);
  });

  test("returns the anti-diagonal of a 1x1 matrix", () => {
    expect(antiDiagonal([[42]])).toEqual([42]);
  });

  test("returns empty array for an empty matrix", () => {
    expect(antiDiagonal([])).toEqual([]);
  });

  test("does not modify the original grid", () => {
    const grid = [
      [1, 2],
      [3, 4],
    ];
    const snapshot = JSON.stringify(grid);
    antiDiagonal(grid);
    expect(JSON.stringify(grid)).toEqual(snapshot);
  });
});
