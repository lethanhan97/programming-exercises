import { test, expect, describe } from "bun:test";
import { jumpSearch } from "./index";

describe("jumpSearch", () => {
  test("finds element at the beginning", () => {
    expect(jumpSearch([1, 3, 5, 7, 9, 11, 13, 15], 1)).toBe(0);
  });

  test("finds element at the end", () => {
    expect(jumpSearch([1, 3, 5, 7, 9, 11, 13, 15], 15)).toBe(7);
  });

  test("finds element in the middle", () => {
    expect(jumpSearch([1, 3, 5, 7, 9, 11, 13, 15], 7)).toBe(3);
  });

  test("returns -1 when element is not found", () => {
    expect(jumpSearch([1, 3, 5, 7, 9], 4)).toBe(-1);
  });

  test("returns -1 for empty array", () => {
    expect(jumpSearch([], 1)).toBe(-1);
  });

  test("works with single element found", () => {
    expect(jumpSearch([10], 10)).toBe(0);
  });

  test("works with single element not found", () => {
    expect(jumpSearch([10], 5)).toBe(-1);
  });

  test("works with two elements", () => {
    expect(jumpSearch([2, 8], 2)).toBe(0);
    expect(jumpSearch([2, 8], 8)).toBe(1);
    expect(jumpSearch([2, 8], 5)).toBe(-1);
  });

  test("works with negative numbers", () => {
    expect(jumpSearch([-10, -5, 0, 5, 10], -5)).toBe(1);
    expect(jumpSearch([-10, -5, 0, 5, 10], 10)).toBe(4);
  });

  test("works with large sorted array", () => {
    const arr = Array.from({ length: 1000 }, (_, i) => i * 3);
    expect(jumpSearch(arr, 300)).toBe(100);
    expect(jumpSearch(arr, 301)).toBe(-1);
  });

  test("returns -1 when target is less than all elements", () => {
    expect(jumpSearch([10, 20, 30], 5)).toBe(-1);
  });

  test("returns -1 when target is greater than all elements", () => {
    expect(jumpSearch([10, 20, 30], 35)).toBe(-1);
  });
});
