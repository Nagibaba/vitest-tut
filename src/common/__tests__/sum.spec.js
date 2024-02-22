import { expect, test, describe } from "vitest";
import { sum } from "../utils";

describe("sum function", () => {
  test("works with positive numbers", () => {
    const result = sum(1, 3);

    expect(result).toBe(4);
  });

  test("works with negative numbers", () => {
    const result = sum(-1, -3);

    expect(result).toBe(-4);
  });

  test("doesnt allow strings", () => {
    const result = sum("1", "3");

    expect(result).toThrow(Error);
  });
});
