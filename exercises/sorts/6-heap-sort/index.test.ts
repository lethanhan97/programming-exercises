import { test, expect, describe } from "bun:test";
import { heapSort } from "./index";

describe("heapSort", () => {
  test("sorts an already sorted array", () => {
    expect(heapSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts a reverse-sorted array", () => {
    expect(heapSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts an unsorted array", () => {
    expect(heapSort([12, 11, 13, 5, 6, 7])).toEqual([5, 6, 7, 11, 12, 13]);
  });

  test("returns empty array for empty input", () => {
    expect(heapSort([])).toEqual([]);
  });

  test("returns same array for single element", () => {
    expect(heapSort([42])).toEqual([42]);
  });

  test("sorts two elements", () => {
    expect(heapSort([9, 1])).toEqual([1, 9]);
  });

  test("handles duplicate values", () => {
    expect(heapSort([4, 1, 3, 1, 4, 2])).toEqual([1, 1, 2, 3, 4, 4]);
  });

  test("handles negative numbers", () => {
    expect(heapSort([0, -3, 5, -1, 2])).toEqual([-3, -1, 0, 2, 5]);
  });

  test("handles all identical elements", () => {
    expect(heapSort([8, 8, 8, 8])).toEqual([8, 8, 8, 8]);
  });

  test("does not modify the original array", () => {
    const original = [3, 1, 2];
    const copy = [...original];
    heapSort(original);
    expect(original).toEqual(copy);
  });

  test("sorts a large array correctly", () => {
    const arr = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
    const expected = [...arr].sort((a, b) => a - b);
    expect(heapSort(arr)).toEqual(expected);
  });

  test("handles mix of positive and negative with duplicates", () => {
    expect(heapSort([0, -2, 3, -2, 1, 0])).toEqual([-2, -2, 0, 0, 1, 3]);
  });
});
