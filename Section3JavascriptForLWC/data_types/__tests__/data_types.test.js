describe('Test Data Types', function () {

  test('numbers', () => {
    expect(typeof 4).toBe('number');
    expect(typeof 4.3568).toBe('number')
  });

  test('strings', () => {
    expect(typeof 'foobar').toBe('string');
  });

  test('boolean', () => {
    expect(typeof true).toBe('boolean');
  });

  test('bigint', () => {
    expect(typeof 1n).toBe('bigint');
  });

  test('undefined', () => {
    expect(typeof undefined).toBe('undefined');
  });

  test('null', () => {
    expect(typeof null).toBe('object');
  });

  test('object', () => {
    expect(typeof {}).toBe('object');
  });

  test('symbol', () => {
    expect(typeof Symbol('foo')).toBe('symbol');
  })
});
