import { test, expect, describe } from "bun:test";
import { mergeSort } from "./index";

describe("mergeSort", () => {
  test("sorts an already sorted array", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts a reverse-sorted array", () => {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts an unsorted array", () => {
    expect(mergeSort([3, 1, 4, 1, 5, 9, 2, 6])).toEqual([1, 1, 2, 3, 4, 5, 6, 9]);
  });

  test("returns empty array for empty input", () => {
    expect(mergeSort([])).toEqual([]);
  });

  test("returns same array for single element", () => {
    expect(mergeSort([42])).toEqual([42]);
  });

  test("sorts two elements", () => {
    expect(mergeSort([2, 1])).toEqual([1, 2]);
  });

  test("handles duplicate values", () => {
    expect(mergeSort([3, 3, 1, 1, 2, 2])).toEqual([1, 1, 2, 2, 3, 3]);
  });

  test("handles negative numbers", () => {
    expect(mergeSort([-3, 1, -5, 4, 0])).toEqual([-5, -3, 0, 1, 4]);
  });

  test("handles all identical elements", () => {
    expect(mergeSort([7, 7, 7, 7])).toEqual([7, 7, 7, 7]);
  });

  test("does not modify the original array", () => {
    const original = [3, 1, 2];
    const copy = [...original];
    mergeSort(original);
    expect(original).toEqual(copy);
  });

  test("sorts a large array correctly", () => {
    const arr = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));
    const expected = [...arr].sort((a, b) => a - b);
    expect(mergeSort(arr)).toEqual(expected);
  });

  test("handles mix of positive and negative with duplicates", () => {
    expect(mergeSort([0, -1, 3, -1, 2, 0])).toEqual([-1, -1, 0, 0, 2, 3]);
  });
});
