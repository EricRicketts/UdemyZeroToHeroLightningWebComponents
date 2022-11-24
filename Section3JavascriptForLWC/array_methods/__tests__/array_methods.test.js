import { arr1, arr2, arr3 } from "../src/array_methods";
// map, every, filter, some, sort, reduce, forEach

describe('Test Common Array Methods', function () {
  let expected, results;

  test('should map one array to a new array', () => {
    expected = ["o", "o", "a", "nsid", "ascad"];
    results = arr1.map(str => str.slice(1, str.length - 1));
    expect(results).toEqual(expected);
  });

  test('should return true if every element in an array meets a condition', () => {
    results = arr1.every(str => str.length > 2)
    expect(results).toBe(true);
  });

  test('should filter numbers less than 15', () => {
    expected = [10, -5];
    results = arr2.filter(num => num < 15);
    expect(results).toEqual(expected);
  });

  test('should return true if at least one element meets the condition', () => {
    results = arr3.some(elem => typeof elem === 'object');
    expect(results).toBe(true);
  });

  test('should be able to sort a string array by default', () => {
    expected = ["bar", "cascade", "foo", "inside", "zoo"];
    expect(arr1.sort()).toEqual(expected);
  });

  test('should be able to sort a numeric array by a given function', () => {
    const compareNumbers = (a, b) => a - b;
    expected = [-5, 10, 30.5, (60 + 2/3), 100];
    expect(arr2.sort(compareNumbers)).toEqual(expected);
  });

  test('should reduce to a sum for an array of number', () => {
    let arr = [1, 2, 3, 4, 5, 6];
    expected = 21;
    results = arr.reduce((acc, num) => acc + num, 0);
    expect(results).toBe(expected);
  });

  test('should code forEach to sum an array', () => {
    let sum = 0;
    let arr = [1, 2, 3, 4, 5, 6];
    arr.forEach(n => {
      sum += n;
    });
    expect(sum).toBe(21);
  });
});
