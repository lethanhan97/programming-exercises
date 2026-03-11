import { test, expect, describe } from "bun:test";
import { selectionSort } from "./index";

describe("selectionSort", () => {
  test("sorts an already sorted array", () => {
    expect(selectionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts a reverse-sorted array", () => {
    expect(selectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts an unsorted array", () => {
    expect(selectionSort([29, 10, 14, 37, 13])).toEqual([10, 13, 14, 29, 37]);
  });

  test("returns empty array for empty input", () => {
    expect(selectionSort([])).toEqual([]);
  });

  test("returns same array for single element", () => {
    expect(selectionSort([42])).toEqual([42]);
  });

  test("sorts two elements", () => {
    expect(selectionSort([8, 3])).toEqual([3, 8]);
  });

  test("handles duplicate values", () => {
    expect(selectionSort([4, 2, 4, 1, 2])).toEqual([1, 2, 2, 4, 4]);
  });

  test("handles negative numbers", () => {
    expect(selectionSort([1, -3, 0, -8, 6])).toEqual([-8, -3, 0, 1, 6]);
  });

  test("handles all identical elements", () => {
    expect(selectionSort([9, 9, 9, 9])).toEqual([9, 9, 9, 9]);
  });

  test("does not modify the original array", () => {
    const original = [3, 1, 2];
    const copy = [...original];
    selectionSort(original);
    expect(original).toEqual(copy);
  });

  test("sorts a large array correctly", () => {
    const arr = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));
    const expected = [...arr].sort((a, b) => a - b);
    expect(selectionSort(arr)).toEqual(expected);
  });
});
