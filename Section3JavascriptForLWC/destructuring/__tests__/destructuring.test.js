describe("Test Array and Object Destructuring", () => {
  let expected;
  test("should destructure array exactly when called to do so", () => {
    expected = ["foo", "bar"];
    let [x, y] = expected;
    expect([x, y]).toEqual(expected);
  });

  test("should destructure array discarding excess", () => {
    expected = ["foo", "bar"];
    let arr = ["foo", "bar", "fizz"];
    let [x, y] = arr;
    expect([x, y]).toEqual(expected);
  });

  test("should destructure objects by keys", () => {
    expected = ["foo", "bar", "fizz", "buzz"];
    let obj = { a: "foo", b: "bar", c: "fizz", d: "buzz" };
    let { a, b, c, d } = obj;

    expect([a, b, c, d]).toEqual(expected);
  });
});
