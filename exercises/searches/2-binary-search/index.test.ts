import { test, expect, describe } from "bun:test";
import { binarySearch } from "./index";

describe("binarySearch", () => {
  test("finds element at the beginning", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
  });

  test("finds element at the end", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  test("finds element in the middle", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  test("returns -1 when element is not found", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  test("returns -1 for empty array", () => {
    expect(binarySearch([], 1)).toBe(-1);
  });

  test("works with single element found", () => {
    expect(binarySearch([7], 7)).toBe(0);
  });

  test("works with single element not found", () => {
    expect(binarySearch([7], 3)).toBe(-1);
  });

  test("works with two elements", () => {
    expect(binarySearch([1, 3], 1)).toBe(0);
    expect(binarySearch([1, 3], 3)).toBe(1);
    expect(binarySearch([1, 3], 2)).toBe(-1);
  });

  test("works with negative numbers", () => {
    expect(binarySearch([-5, -3, 0, 2, 4], -3)).toBe(1);
    expect(binarySearch([-5, -3, 0, 2, 4], 0)).toBe(2);
  });

  test("works with large array", () => {
    const arr = Array.from({ length: 1000 }, (_, i) => i * 2);
    expect(binarySearch(arr, 500)).toBe(250);
    expect(binarySearch(arr, 999)).toBe(-1);
  });

  test("returns -1 when target is less than all elements", () => {
    expect(binarySearch([10, 20, 30], 5)).toBe(-1);
  });

  test("returns -1 when target is greater than all elements", () => {
    expect(binarySearch([10, 20, 30], 35)).toBe(-1);
  });

  test("works with duplicate values (returns any valid index)", () => {
    const result = binarySearch([1, 2, 2, 2, 3], 2);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(3);
  });
});
