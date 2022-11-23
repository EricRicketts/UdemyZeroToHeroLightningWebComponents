import { firstObject, secondObject, simpleObject } from "../src/object_and_json_code";

describe('Test Common JSON And Object Operations', function () {
  let expected, results;

  describe('Common Object Operations', function () {
    test('should return an array of keys with the keys method', () => {
      expected = ["a", "b", "c", "d"];
      expect(Object.keys(firstObject)).toEqual(expected);
    });

    test('should return an array of values with the values method', () => {
      expected = [
        "salesforce", "is not a good choice",
        { a: "foo", b: "bar", c: 1, d: 3 },
        ['a', 'b', 'c', 'd']
      ];
      expect(Object.values(secondObject)).toEqual(expected);
    });
  });

  describe('Common JSON Operations', function () {
    test('should convert an object to a string with stringify', () => {
      results = JSON.stringify(simpleObject);
      expected = "{\"foo\":\"bar\",\"fizz\":21,\"bool\":true,\"h\":{\"first\":\"a\",\"second\":[1,2,\"c\"]}}";
      expect(results).toBe(expected);
    });

    test('should convert a string to an object with parse', () => {
      let str = "{\"a\":\"foo\",\"b\":2,\"c\":true,\"d\":{\"e\":\"bar\",\"f\":[1,2,\"foobar\"]}}"
      expected = {a: "foo", b: 2, c: true, d: {e: "bar", f: [1, 2, "foobar"]}};
      results = JSON.parse(str);
      expect(results).toEqual(expected);
    });
  });
});
