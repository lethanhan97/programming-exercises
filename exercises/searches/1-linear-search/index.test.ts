import { test, expect, describe } from "bun:test";
import { linearSearch } from "./index";

describe("linearSearch", () => {
  test("finds element at the beginning", () => {
    expect(linearSearch([10, 20, 30, 40], 10)).toBe(0);
  });

  test("finds element at the end", () => {
    expect(linearSearch([10, 20, 30, 40], 40)).toBe(3);
  });

  test("finds element in the middle", () => {
    expect(linearSearch([10, 20, 30, 40], 20)).toBe(1);
  });

  test("returns -1 when element is not found", () => {
    expect(linearSearch([10, 20, 30], 50)).toBe(-1);
  });

  test("returns -1 for empty array", () => {
    expect(linearSearch([], 1)).toBe(-1);
  });

  test("works with single element found", () => {
    expect(linearSearch([5], 5)).toBe(0);
  });

  test("works with single element not found", () => {
    expect(linearSearch([5], 3)).toBe(-1);
  });

  test("returns first occurrence for duplicates", () => {
    expect(linearSearch([1, 2, 3, 2, 1], 2)).toBe(1);
  });

  test("works with negative numbers", () => {
    expect(linearSearch([-5, -3, 0, 2, 4], -3)).toBe(1);
  });

  test("works with unsorted array", () => {
    expect(linearSearch([30, 10, 50, 20, 40], 50)).toBe(2);
  });

  test("works with all identical elements", () => {
    expect(linearSearch([7, 7, 7, 7], 7)).toBe(0);
  });
});
