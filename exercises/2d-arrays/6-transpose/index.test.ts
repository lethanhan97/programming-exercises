import { test, expect, describe } from "bun:test";
import { transposeInPlace } from "./index";

describe("transposeInPlace", () => {
  test("transposes a 3x3 matrix", () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    transposeInPlace(grid);
    expect(grid).toEqual([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ]);
  });

  test("transposes a 2x2 matrix", () => {
    const grid = [
      [1, 2],
      [3, 4],
    ];
    transposeInPlace(grid);
    expect(grid).toEqual([
      [1, 3],
      [2, 4],
    ]);
  });

  test("transposes a 4x4 matrix", () => {
    const grid = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    transposeInPlace(grid);
    expect(grid).toEqual([
      [1, 5, 9, 13],
      [2, 6, 10, 14],
      [3, 7, 11, 15],
      [4, 8, 12, 16],
    ]);
  });

  test("transposing twice returns the original matrix", () => {
    const original = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const grid = original.map((row) => [...row]);
    transposeInPlace(grid);
    transposeInPlace(grid);
    expect(grid).toEqual(original);
  });

  test("transposes a 1x1 matrix", () => {
    const grid = [[42]];
    transposeInPlace(grid);
    expect(grid).toEqual([[42]]);
  });

  test("leaves a symmetric matrix unchanged", () => {
    const grid = [
      [1, 2, 3],
      [2, 4, 5],
      [3, 5, 6],
    ];
    transposeInPlace(grid);
    expect(grid).toEqual([
      [1, 2, 3],
      [2, 4, 5],
      [3, 5, 6],
    ]);
  });

  test("mutates the original grid (does not return a new one)", () => {
    const grid = [
      [1, 2],
      [3, 4],
    ];
    const ref = grid;
    transposeInPlace(grid);
    expect(grid).toBe(ref);
    expect(grid).toEqual([
      [1, 3],
      [2, 4],
    ]);
  });

  test("returns undefined", () => {
    const grid = [
      [1, 2],
      [3, 4],
    ];
    expect(transposeInPlace(grid)).toBeUndefined();
  });
});
