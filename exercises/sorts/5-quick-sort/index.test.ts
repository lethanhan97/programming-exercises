import { test, expect, describe } from "bun:test";
import { quickSort } from "./index";

describe("quickSort", () => {
  test("sorts an already sorted array", () => {
    expect(quickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts a reverse-sorted array", () => {
    expect(quickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts an unsorted array", () => {
    expect(quickSort([10, 7, 8, 9, 1, 5])).toEqual([1, 5, 7, 8, 9, 10]);
  });

  test("returns empty array for empty input", () => {
    expect(quickSort([])).toEqual([]);
  });

  test("returns same array for single element", () => {
    expect(quickSort([42])).toEqual([42]);
  });

  test("sorts two elements", () => {
    expect(quickSort([7, 2])).toEqual([2, 7]);
  });

  test("handles duplicate values", () => {
    expect(quickSort([3, 6, 3, 1, 6, 1])).toEqual([1, 1, 3, 3, 6, 6]);
  });

  test("handles negative numbers", () => {
    expect(quickSort([2, -4, 0, -1, 5])).toEqual([-4, -1, 0, 2, 5]);
  });

  test("handles all identical elements", () => {
    expect(quickSort([6, 6, 6, 6])).toEqual([6, 6, 6, 6]);
  });

  test("does not modify the original array", () => {
    const original = [3, 1, 2];
    const copy = [...original];
    quickSort(original);
    expect(original).toEqual(copy);
  });

  test("sorts array with many duplicates", () => {
    expect(quickSort([2, 1, 2, 1, 2, 1])).toEqual([1, 1, 1, 2, 2, 2]);
  });

  test("sorts a large array correctly", () => {
    const arr = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
    const expected = [...arr].sort((a, b) => a - b);
    expect(quickSort(arr)).toEqual(expected);
  });
});
