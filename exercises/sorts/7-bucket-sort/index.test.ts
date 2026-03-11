import { test, expect, describe } from "bun:test";
import { bucketSort } from "./index";

describe("bucketSort", () => {
  test("sorts an already sorted array", () => {
    expect(bucketSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts a reverse-sorted array", () => {
    expect(bucketSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts an unsorted array", () => {
    expect(bucketSort([42, 15, 7, 33, 28, 51])).toEqual([7, 15, 28, 33, 42, 51]);
  });

  test("returns empty array for empty input", () => {
    expect(bucketSort([])).toEqual([]);
  });

  test("returns same array for single element", () => {
    expect(bucketSort([42])).toEqual([42]);
  });

  test("sorts two elements", () => {
    expect(bucketSort([8, 3])).toEqual([3, 8]);
  });

  test("handles duplicate values", () => {
    expect(bucketSort([5, 2, 5, 1, 2])).toEqual([1, 2, 2, 5, 5]);
  });

  test("handles negative numbers", () => {
    expect(bucketSort([-3, 4, 0, -7, 2])).toEqual([-7, -3, 0, 2, 4]);
  });

  test("handles all identical elements", () => {
    expect(bucketSort([6, 6, 6, 6])).toEqual([6, 6, 6, 6]);
  });

  test("does not modify the original array", () => {
    const original = [3, 1, 2];
    const copy = [...original];
    bucketSort(original);
    expect(original).toEqual(copy);
  });

  test("handles values in a narrow range", () => {
    expect(bucketSort([10, 12, 11, 13, 10])).toEqual([10, 10, 11, 12, 13]);
  });

  test("handles values in a wide range", () => {
    expect(bucketSort([1, 500, 100, 999, 50])).toEqual([1, 50, 100, 500, 999]);
  });

  test("sorts a large array correctly", () => {
    const arr = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
    const expected = [...arr].sort((a, b) => a - b);
    expect(bucketSort(arr)).toEqual(expected);
  });

  test("handles mix of positive and negative with duplicates", () => {
    expect(bucketSort([0, -1, 3, -1, 2, 0])).toEqual([-1, -1, 0, 0, 2, 3]);
  });
});
