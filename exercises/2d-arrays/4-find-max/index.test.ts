import { test, expect, describe } from "bun:test";
import { findMax } from "./index";

describe("findMax", () => {
  test("finds the max in a 3x3 matrix", () => {
    expect(
      findMax([
        [1, 7, 3],
        [4, 2, 9],
        [8, 5, 6],
      ]),
    ).toEqual({ value: 9, row: 1, col: 2 });
  });

  test("finds the max when it is in the top-left", () => {
    expect(
      findMax([
        [99, 1, 2],
        [3, 4, 5],
      ]),
    ).toEqual({ value: 99, row: 0, col: 0 });
  });

  test("finds the max when it is in the bottom-right", () => {
    expect(
      findMax([
        [1, 2, 3],
        [4, 5, 99],
      ]),
    ).toEqual({ value: 99, row: 1, col: 2 });
  });

  test("returns the first occurrence of the max on ties", () => {
    expect(
      findMax([
        [1, 5, 5],
        [5, 5, 1],
      ]),
    ).toEqual({ value: 5, row: 0, col: 1 });
  });

  test("finds the max in a single-row matrix", () => {
    expect(findMax([[3, 1, 4, 1, 5, 9, 2, 6]])).toEqual({ value: 9, row: 0, col: 5 });
  });

  test("finds the max in a single-column matrix", () => {
    expect(findMax([[1], [4], [2], [3]])).toEqual({ value: 4, row: 1, col: 0 });
  });

  test("finds the max in a 1x1 matrix", () => {
    expect(findMax([[42]])).toEqual({ value: 42, row: 0, col: 0 });
  });

  test("handles all-negative matrices", () => {
    expect(
      findMax([
        [-5, -2, -8],
        [-1, -9, -3],
      ]),
    ).toEqual({ value: -1, row: 1, col: 0 });
  });

  test("handles a matrix of identical values", () => {
    expect(
      findMax([
        [7, 7],
        [7, 7],
      ]),
    ).toEqual({ value: 7, row: 0, col: 0 });
  });

  test("does not modify the original grid", () => {
    const grid = [
      [1, 2],
      [3, 4],
    ];
    const snapshot = JSON.stringify(grid);
    findMax(grid);
    expect(JSON.stringify(grid)).toEqual(snapshot);
  });
});
