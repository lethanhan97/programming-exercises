import { test, expect, describe } from "bun:test";
import { traverseRowByRow, traverseColumnByColumn } from "./index";

describe("traverseRowByRow", () => {
  test("traverses a 3x3 square matrix", () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(traverseRowByRow(grid)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("traverses a wide matrix (more cols than rows)", () => {
    const grid = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
    ];
    expect(traverseRowByRow(grid)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test("traverses a tall matrix (more rows than cols)", () => {
    const grid = [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ];
    expect(traverseRowByRow(grid)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test("traverses a single-row matrix", () => {
    expect(traverseRowByRow([[1, 2, 3, 4]])).toEqual([1, 2, 3, 4]);
  });

  test("traverses a single-column matrix", () => {
    expect(traverseRowByRow([[1], [2], [3], [4]])).toEqual([1, 2, 3, 4]);
  });

  test("traverses a 1x1 matrix", () => {
    expect(traverseRowByRow([[42]])).toEqual([42]);
  });

  test("returns empty array for empty matrix", () => {
    expect(traverseRowByRow([])).toEqual([]);
  });

  test("does not modify the original grid", () => {
    const grid = [
      [1, 2],
      [3, 4],
    ];
    const snapshot = JSON.stringify(grid);
    traverseRowByRow(grid);
    expect(JSON.stringify(grid)).toEqual(snapshot);
  });
});

describe("traverseColumnByColumn", () => {
  test("traverses a 3x3 square matrix", () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(traverseColumnByColumn(grid)).toEqual([1, 4, 7, 2, 5, 8, 3, 6, 9]);
  });

  test("traverses a wide matrix (more cols than rows)", () => {
    const grid = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
    ];
    expect(traverseColumnByColumn(grid)).toEqual([1, 5, 2, 6, 3, 7, 4, 8]);
  });

  test("traverses a tall matrix (more rows than cols)", () => {
    const grid = [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ];
    expect(traverseColumnByColumn(grid)).toEqual([1, 3, 5, 7, 2, 4, 6, 8]);
  });

  test("traverses a single-row matrix", () => {
    expect(traverseColumnByColumn([[1, 2, 3, 4]])).toEqual([1, 2, 3, 4]);
  });

  test("traverses a single-column matrix", () => {
    expect(traverseColumnByColumn([[1], [2], [3], [4]])).toEqual([1, 2, 3, 4]);
  });

  test("traverses a 1x1 matrix", () => {
    expect(traverseColumnByColumn([[42]])).toEqual([42]);
  });

  test("returns empty array for empty matrix", () => {
    expect(traverseColumnByColumn([])).toEqual([]);
  });

  test("does not modify the original grid", () => {
    const grid = [
      [1, 2],
      [3, 4],
    ];
    const snapshot = JSON.stringify(grid);
    traverseColumnByColumn(grid);
    expect(JSON.stringify(grid)).toEqual(snapshot);
  });
});
