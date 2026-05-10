import { test, expect, describe } from "bun:test";
import { rotate, rotateInPlace } from "./index";

describe("rotate", () => {
  test("rotates a 3x3 matrix 90° clockwise", () => {
    expect(
      rotate([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });

  test("rotates a 2x2 matrix 90° clockwise", () => {
    expect(
      rotate([
        [1, 2],
        [3, 4],
      ]),
    ).toEqual([
      [3, 1],
      [4, 2],
    ]);
  });

  test("rotates a 4x4 matrix 90° clockwise", () => {
    expect(
      rotate([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ]),
    ).toEqual([
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4],
    ]);
  });

  test("rotates a 1x1 matrix", () => {
    expect(rotate([[42]])).toEqual([[42]]);
  });

  test("rotating four times returns the original matrix", () => {
    const original = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    let result = rotate(original);
    result = rotate(result);
    result = rotate(result);
    result = rotate(result);
    expect(result).toEqual(original);
  });

  test("does not modify the original grid", () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const snapshot = JSON.stringify(grid);
    rotate(grid);
    expect(JSON.stringify(grid)).toEqual(snapshot);
  });
});

describe("rotateInPlace", () => {
  test("rotates a 3x3 matrix 90° clockwise", () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    rotateInPlace(grid);
    expect(grid).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });

  test("rotates a 2x2 matrix 90° clockwise", () => {
    const grid = [
      [1, 2],
      [3, 4],
    ];
    rotateInPlace(grid);
    expect(grid).toEqual([
      [3, 1],
      [4, 2],
    ]);
  });

  test("rotates a 4x4 matrix 90° clockwise", () => {
    const grid = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    rotateInPlace(grid);
    expect(grid).toEqual([
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4],
    ]);
  });

  test("rotates a 1x1 matrix", () => {
    const grid = [[42]];
    rotateInPlace(grid);
    expect(grid).toEqual([[42]]);
  });

  test("rotating four times in place returns the original matrix", () => {
    const original = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const grid = original.map((row) => [...row]);
    rotateInPlace(grid);
    rotateInPlace(grid);
    rotateInPlace(grid);
    rotateInPlace(grid);
    expect(grid).toEqual(original);
  });

  test("mutates the original grid (does not return a new one)", () => {
    const grid = [
      [1, 2],
      [3, 4],
    ];
    const ref = grid;
    rotateInPlace(grid);
    expect(grid).toBe(ref);
  });

  test("returns undefined", () => {
    const grid = [
      [1, 2],
      [3, 4],
    ];
    expect(rotateInPlace(grid)).toBeUndefined();
  });
});
