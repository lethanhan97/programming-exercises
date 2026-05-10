import { test, expect, describe } from "bun:test";
import { rowSums, columnSums } from "./index";

describe("rowSums", () => {
  test("computes row sums for a 2x3 matrix", () => {
    expect(
      rowSums([
        [1, 2, 3],
        [4, 5, 6],
      ]),
    ).toEqual([6, 15]);
  });

  test("computes row sums for a 3x3 matrix", () => {
    expect(
      rowSums([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toEqual([6, 15, 24]);
  });

  test("computes row sums for a tall matrix", () => {
    expect(
      rowSums([
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
      ]),
    ).toEqual([3, 7, 11, 15]);
  });

  test("computes row sums for a single-row matrix", () => {
    expect(rowSums([[10, 20, 30]])).toEqual([60]);
  });

  test("computes row sums for a single-column matrix", () => {
    expect(rowSums([[1], [2], [3]])).toEqual([1, 2, 3]);
  });

  test("returns empty array for an empty matrix", () => {
    expect(rowSums([])).toEqual([]);
  });

  test("handles negative numbers", () => {
    expect(
      rowSums([
        [1, -2, 3],
        [-4, 5, -6],
      ]),
    ).toEqual([2, -5]);
  });

  test("does not modify the original grid", () => {
    const grid = [
      [1, 2],
      [3, 4],
    ];
    const snapshot = JSON.stringify(grid);
    rowSums(grid);
    expect(JSON.stringify(grid)).toEqual(snapshot);
  });
});

describe("columnSums", () => {
  test("computes column sums for a 2x3 matrix", () => {
    expect(
      columnSums([
        [1, 2, 3],
        [4, 5, 6],
      ]),
    ).toEqual([5, 7, 9]);
  });

  test("computes column sums for a 3x3 matrix", () => {
    expect(
      columnSums([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toEqual([12, 15, 18]);
  });

  test("computes column sums for a tall matrix", () => {
    expect(
      columnSums([
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
      ]),
    ).toEqual([16, 20]);
  });

  test("computes column sums for a single-row matrix", () => {
    expect(columnSums([[10, 20, 30]])).toEqual([10, 20, 30]);
  });

  test("computes column sums for a single-column matrix", () => {
    expect(columnSums([[1], [2], [3]])).toEqual([6]);
  });

  test("returns empty array for an empty matrix", () => {
    expect(columnSums([])).toEqual([]);
  });

  test("handles negative numbers", () => {
    expect(
      columnSums([
        [1, -2, 3],
        [-4, 5, -6],
      ]),
    ).toEqual([-3, 3, -3]);
  });

  test("does not modify the original grid", () => {
    const grid = [
      [1, 2],
      [3, 4],
    ];
    const snapshot = JSON.stringify(grid);
    columnSums(grid);
    expect(JSON.stringify(grid)).toEqual(snapshot);
  });
});
