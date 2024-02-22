import { expect, test, describe } from "vitest";
import { mergeObjects } from "../utils";

describe("mergeObjects", () => {
  test("with two valid objects", () => {
    const a = { name: "ali" };
    const b = { age: 23 };
    const expectedResult = { name: "ali" };
    const result = mergeObjects(a, b);

    expect(result).toMatchObject(expectedResult);
  });
});
