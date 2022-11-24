import { checkIsSuccess } from "../src/promise_example";

describe('Test Basic Promise', function () {
  test('resolved promise', () => {
    expect.assertions(1);
    return expect(checkIsSuccess('success')).resolves.toBe('successfully executed');
  });

  test('rejected promise', () => {
    expect.assertions(1);
    return expect(checkIsSuccess('fail')).rejects.toBe('unsuccessfully executed');
  });
});
