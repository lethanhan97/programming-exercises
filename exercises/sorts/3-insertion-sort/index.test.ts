import { test, expect, describe } from "bun:test";
import { insertionSort } from "./index";

describe("insertionSort", () => {
  test("sorts an already sorted array", () => {
    expect(insertionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts a reverse-sorted array", () => {
    expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts an unsorted array", () => {
    expect(insertionSort([12, 11, 13, 5, 6])).toEqual([5, 6, 11, 12, 13]);
  });

  test("returns empty array for empty input", () => {
    expect(insertionSort([])).toEqual([]);
  });

  test("returns same array for single element", () => {
    expect(insertionSort([42])).toEqual([42]);
  });

  test("sorts two elements", () => {
    expect(insertionSort([9, 1])).toEqual([1, 9]);
  });

  test("handles duplicate values", () => {
    expect(insertionSort([5, 2, 5, 1, 2])).toEqual([1, 2, 2, 5, 5]);
  });

  test("handles negative numbers", () => {
    expect(insertionSort([3, -1, 0, -7, 5])).toEqual([-7, -1, 0, 3, 5]);
  });

  test("handles all identical elements", () => {
    expect(insertionSort([4, 4, 4, 4])).toEqual([4, 4, 4, 4]);
  });

  test("does not modify the original array", () => {
    const original = [3, 1, 2];
    const copy = [...original];
    insertionSort(original);
    expect(original).toEqual(copy);
  });

  test("is stable (preserves relative order of equal elements)", () => {
    // Using a trick: sort indices by their values to check stability
    const arr = [3, 1, 2, 1, 3];
    const result = insertionSort(arr);
    expect(result).toEqual([1, 1, 2, 3, 3]);
  });

  test("sorts a large array correctly", () => {
    const arr = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));
    const expected = [...arr].sort((a, b) => a - b);
    expect(insertionSort(arr)).toEqual(expected);
  });
});
