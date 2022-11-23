describe("Test String Methods", () => {
  let expected, str;
  beforeEach(() => {
    str = "Let us hope for the best.";
  });

  test("should identify a substring within a string", () => {
    expect(str.includes("best")).toBe(true);
  });

  test("should identify the beginning index of a substring", () => {
    expect(str.indexOf("hope")).toBe(7);
  });

  test("should return -1 if indexOf finds no match", () => {
    expect(str.indexOf("zoo")).toBe(-1);
  });

  test("should have default position of startWith at index 0", () => {
    expect(str.startsWith("Let")).toBe(true);
  });

  test("should have ability to change default start position of startsWith", () => {
    expect(str.startsWith("for", 12)).toBe(true);
  });

  test("should slice with leading index only", () => {
    expected = "hope for the best.";
    expect(str.slice(7)).toBe(expected);
  });

  test("should slice with beginning index and optional ending index (non-inclusive)", () => {
    expected = "hope for the";
    expect(str.slice(7, 19)).toBe(expected);
  });

  test("should be able to use negative indices", () => {
    expected = "best";
    expect(str.slice(-5, -1)).toBe(expected);
  });

  test("should allow for all upper case", () => {
    expected = "LET US HOPE FOR THE BEST.";
    expect(str.toUpperCase()).toBe(expected);
  });

  test("should allow for all lower case", () => {
    expected = "let us hope for the best.";
    expect(str.toLowerCase()).toBe(expected);
  });

  test("should allow for trimming both sides of a string", () => {
    expected = "In all the works.";
    expect("   In all the works.  ".trim()).toBe(expected);
  });
});
