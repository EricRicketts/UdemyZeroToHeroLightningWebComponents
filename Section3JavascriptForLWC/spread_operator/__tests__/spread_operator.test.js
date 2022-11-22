import { spreadOnString } from "../src/spread_operators";
import { deepCopy } from "../src/deep_copy";

describe('Test Spread Operators', function () {

  let expected;

  test('should perform spread on a string', () => {
    expected = ['f', 'o', 'o', 'b', 'a', 'r'];
    expect(spreadOnString('foobar')).toEqual(expected);
  });

  test('should combine two arrays', () => {
    expected = ['foo', 'bar', 'fizz', 'buzz'];

    let x = ['foo', 'bar'];
    let y = ['fizz', 'buzz'];
    let z = [...x, ...y];

    expect(z).toEqual(expected);
  });

  test('should combine without flattening arrays with hierarchy', () => {
    expected = ['foo', 'bar', 'fizz', 'buzz', ['up', 'down'], 'right', 'left'];

    let x = ['foo', 'bar'];
    let y = ['fizz', 'buzz', ['up', 'down'], 'right', 'left'];
    let z = [...x, ...y];

    expect(z).toEqual(expected);
  });

  test('should append individual values in combination with spread operator', () => {
    expected = ['a', 'b', 'c', 'd', 'e'];
    let x = ['b', 'c', 'd'];
    let y = ['a', ...x, 'e'];

    expect(y).toEqual(expected);
  });

  test('should return union of two objects with different keys', () => {
    expected = { a: 1, b: 2, c: 3, d: 4 };
    let obj1 = { a: 1, b: 2 };
    let obj2 = { c: 3, d: 4 };
    let obj3 = { ...obj1, ...obj2 };

    expect(obj3).toEqual(expected);
  });

  test('should take the keys of the right most object in the spread operation for duplicate keys', () => {
    expected = { a: 3, b: 4, c: 5, d: 6 };
    let obj1 = { a: 1, b: 2, c: 5 };
    let obj2 = { a: 3, b: 4, d: 6 };
    let obj3 = { ...obj1, ...obj2 }; // should take the "a" and "b" keys from obj2

    expect(obj3).toEqual(expected);
  });

  test('should use destructuring for shallow copies of non-hierarchical arrays', () => {
    expected = ["a", "b", "c", "d"];
    let obj1 = ["a", "b", "c", "d"];
    let obj2 = [...obj1];

    expect([obj1, obj2]).toEqual([expected, expected]);

    obj1.push("e");
    expect(obj1).toEqual([...expected, "e"]);

    obj2.push("f"); // shallow copy means obj1 and obj2 have different references
    expect(obj2).toEqual([...expected, "f"]);
  });

  test('should verify shallow copy does not work in hierarchy', () => {
    expected = [{ a: 1, b: 2 }, { c: 3, d: 5 }];
    let obj1 = { a: 1, b: 2 };
    let obj2 = { c: 3, d: 4 };
    let arr1 = [obj1, obj2];
    let arr2 = [...arr1];
    arr1[1].d = 5; // shallow copy does not extend through hierarchy

    expect([arr1, arr2]).toEqual([expected, expected]);
  });

  test('should allow creation of a new object with JSON methods', () => {
    let expectedArr1 = [{ a: 1, b: 2 }, { c: 3, d: 5 }];
   let  expectedArr2 = [{ a: 1, b: 2 }, { c: 3, d: 4 }];
    let obj1 = { a: 1, b: 2 };
    let obj2 = { c: 3, d: 4 };
    let arr1 = [obj1, obj2];
    let arr2 = deepCopy(arr1);
    arr1[1].d = 5; // deep copy done with JSON

    expect([arr1, arr2]).toEqual([expectedArr1, expectedArr2]);
  });
});
