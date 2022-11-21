import { x, addTwo, addThree, varScope, letScope } from "../src/example";

describe("Test import constants and functions", () => {
  test("should have imported const x with value 4", () => {
    expect(x).toBe(4);
  });

  test("should add 2 to 5 for 7", () => {
    expect(addTwo(5)).toBe(7);
  });

  test("should add 3 to 6 for 9", () => {
    expect(addThree(6)).toBe(9);
  });

  test("var scoping", () => {
    expect(varScope()).toEqual([4, 8, 10, 1, 3]);
  });

  test("let scoping", () => {
    expect(letScope()).toEqual([1, 2, 3]);
  });
});
