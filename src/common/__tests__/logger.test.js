import { expect, test, describe, vi } from "vitest";
import { logger } from "../utils";

describe("sum function", () => {
  test("works with positive numbers", () => {
    const testCb = vi.fn();
    logger(1, testCb);

    expect(testCb).toHaveBeenCalled();
  });
});
