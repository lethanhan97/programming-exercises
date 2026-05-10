import { test, expect, describe } from "bun:test";
import { sumAll } from "./index";

describe("sumAll", () => {
  test("sums a 2x3 matrix", () => {
    expect(
      sumAll([
        [1, 2, 3],
        [4, 5, 6],
      ]),
    ).toBe(21);
  });

  test("sums a 3x3 matrix", () => {
    expect(
      sumAll([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toBe(45);
  });

  test("sums a single-row matrix", () => {
    expect(sumAll([[10, 20, 30]])).toBe(60);
  });

  test("sums a single-column matrix", () => {
    expect(sumAll([[1], [2], [3], [4]])).toBe(10);
  });

  test("sums a 1x1 matrix", () => {
    expect(sumAll([[42]])).toBe(42);
  });

  test("returns 0 for an empty matrix", () => {
    expect(sumAll([])).toBe(0);
  });

  test("handles negative numbers", () => {
    expect(
      sumAll([
        [-1, -2],
        [-3, -4],
      ]),
    ).toBe(-10);
  });

  test("handles mix of negative, positive, and zero", () => {
    expect(
      sumAll([
        [1, -1, 0],
        [-2, 2, 0],
        [3, -3, 0],
      ]),
    ).toBe(0);
  });

  test("handles a matrix of zeros", () => {
    expect(
      sumAll([
        [0, 0, 0],
        [0, 0, 0],
      ]),
    ).toBe(0);
  });

  test("does not modify the original grid", () => {
    const grid = [
      [1, 2],
      [3, 4],
    ];
    const snapshot = JSON.stringify(grid);
    sumAll(grid);
    expect(JSON.stringify(grid)).toEqual(snapshot);
  });
});
