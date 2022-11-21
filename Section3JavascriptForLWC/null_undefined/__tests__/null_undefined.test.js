describe('Testing null and undefined', function () {

  test('undefined to evaluate to falsy', () => {
    expect(undefined).toBeFalsy();
  });

  test('null to evaluate to falsy', () => {
    expect(null).toBeFalsy();
  });

  test('undefined assigned to uninitialized variables', () => {
    let x;
    expect(x).toBeUndefined();
  });

  test('undefined does equal undefined both in strict and non-strict comparisons', () => {
    let expected = [1, 2];
    let x, y;
    if (undefined == undefined) x = 1;
    if (undefined === undefined) y = 2;

    expect([x, y]).toEqual(expected);
  })

  test('null does equal null in strict and non-strict comparisons', () => {
    let expected = [1, 2];
    let x, y;
    if (null == null) x = 1;
    if (null === null) y = 2;

    expect([x, y]).toEqual(expected);
  });

  test('null equals undefined in non-strict comparisons but not strict comparisons', () => {
    let expected = [1, 2];
    let x, y;
    if (null == undefined) x = 1;
    if (!(null === undefined)) y = 2;


    expect([x, y]).toEqual(expected)
  });

  test('null is an object', () => {
    expect(typeof null).toBe('object');
  });
});
