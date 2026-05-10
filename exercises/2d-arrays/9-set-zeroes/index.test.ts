import { test, expect, describe } from "bun:test";
import { setZeroes } from "./index";

describe("setZeroes", () => {
  test("zeroes the row and column of a single zero", () => {
    const grid = [
      [1, 2, 3],
      [4, 0, 6],
      [7, 8, 9],
    ];
    setZeroes(grid);
    expect(grid).toEqual([
      [1, 0, 3],
      [0, 0, 0],
      [7, 0, 9],
    ]);
  });

  test("handles multiple zeros in different rows and columns", () => {
    const grid = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
      [0, 1, 1],
    ];
    setZeroes(grid);
    expect(grid).toEqual([
      [0, 0, 1],
      [0, 0, 0],
      [0, 0, 1],
      [0, 0, 0],
    ]);
  });

  test("handles two zeros in the same row", () => {
    const grid = [
      [1, 0, 1, 0],
      [2, 3, 4, 5],
      [6, 7, 8, 9],
    ];
    setZeroes(grid);
    expect(grid).toEqual([
      [0, 0, 0, 0],
      [2, 0, 4, 0],
      [6, 0, 8, 0],
    ]);
  });

  test("handles two zeros in the same column", () => {
    const grid = [
      [1, 0, 3],
      [4, 5, 6],
      [7, 0, 9],
    ];
    setZeroes(grid);
    expect(grid).toEqual([
      [0, 0, 0],
      [4, 0, 6],
      [0, 0, 0],
    ]);
  });

  test("does NOT cascade — a row zeroed because of one cell does not trigger more zeros", () => {
    // After Pass 1, only column 1 should be zeroed (because of (0,1)).
    // The naïve "mutate as you go" version would also zero row 1, then column 0
    // (because (1,0) became zero), and so on until the matrix is entirely zero.
    const grid = [
      [1, 0, 1],
      [1, 1, 1],
      [1, 1, 1],
    ];
    setZeroes(grid);
    expect(grid).toEqual([
      [0, 0, 0],
      [1, 0, 1],
      [1, 0, 1],
    ]);
  });

  test("leaves a matrix with no zeros unchanged", () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    setZeroes(grid);
    expect(grid).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
  });

  test("zeros the entire matrix when every row contains a zero", () => {
    const grid = [
      [0, 1],
      [1, 0],
    ];
    setZeroes(grid);
    expect(grid).toEqual([
      [0, 0],
      [0, 0],
    ]);
  });

  test("handles a 1x1 matrix containing zero", () => {
    const grid = [[0]];
    setZeroes(grid);
    expect(grid).toEqual([[0]]);
  });

  test("handles a 1x1 matrix containing a non-zero", () => {
    const grid = [[7]];
    setZeroes(grid);
    expect(grid).toEqual([[7]]);
  });

  test("handles a single-row matrix", () => {
    const grid = [[1, 2, 0, 4]];
    setZeroes(grid);
    expect(grid).toEqual([[0, 0, 0, 0]]);
  });

  test("handles a single-column matrix", () => {
    const grid = [[1], [0], [3]];
    setZeroes(grid);
    expect(grid).toEqual([[0], [0], [0]]);
  });

  test("mutates the original grid (does not return a new one)", () => {
    const grid = [
      [1, 0],
      [3, 4],
    ];
    const ref = grid;
    setZeroes(grid);
    expect(grid).toBe(ref);
  });

  test("returns undefined", () => {
    const grid = [
      [1, 0],
      [3, 4],
    ];
    expect(setZeroes(grid)).toBeUndefined();
  });
});
