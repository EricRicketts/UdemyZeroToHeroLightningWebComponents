describe("Test String Interpolation", () => {
  let expected, result, name, age, a, b;
  beforeEach(() => {
    name = "Eric Ricketts";
    age = 62;
    a = 10;
    b = 20;
  });
  test("should show concatenating strings can get complicated", () => {
    expected =
      "My name is Eric Ricketts and my age is 62 and 10 plus 20 is 30.";
    result =
      "My name is " +
      name +
      " and my age is " +
      age +
      " and " +
      a +
      " plus " +
      b +
      " is " +
      (a + b) +
      ".";
    expect(result).toBe(expected);
  });

  test("should be much easier with string interpolation", () => {
    expected =
      "My name is Eric Ricketts and my age is 62 and 10 plus 20 is 30.";
    result = `My name is ${name} and my age is ${age} and ${a} plus ${b} is ${
      a + b
    }.`;

    expect(result).toEqual(expected);
  });
});
