import { test, expect, describe } from "bun:test";
import { bubbleSort } from "./index";

describe("bubbleSort", () => {
  test("sorts an already sorted array", () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts a reverse-sorted array", () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts an unsorted array", () => {
    expect(bubbleSort([64, 34, 25, 12, 22, 11, 90])).toEqual([11, 12, 22, 25, 34, 64, 90]);
  });

  test("returns empty array for empty input", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  test("returns same array for single element", () => {
    expect(bubbleSort([42])).toEqual([42]);
  });

  test("sorts two elements", () => {
    expect(bubbleSort([2, 1])).toEqual([1, 2]);
  });

  test("handles duplicate values", () => {
    expect(bubbleSort([3, 1, 3, 1, 2])).toEqual([1, 1, 2, 3, 3]);
  });

  test("handles negative numbers", () => {
    expect(bubbleSort([4, -2, 0, -5, 3])).toEqual([-5, -2, 0, 3, 4]);
  });

  test("handles all identical elements", () => {
    expect(bubbleSort([7, 7, 7, 7])).toEqual([7, 7, 7, 7]);
  });

  test("does not modify the original array", () => {
    const original = [3, 1, 2];
    const copy = [...original];
    bubbleSort(original);
    expect(original).toEqual(copy);
  });

  test("sorts a large array correctly", () => {
    const arr = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));
    const expected = [...arr].sort((a, b) => a - b);
    expect(bubbleSort(arr)).toEqual(expected);
  });
});
