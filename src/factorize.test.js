import factorize from './factorize';

describe('factorize', () => {
  test('1 has no prime factors', () => {
    expect(factorize(1)).toStrictEqual([]);
  });

  test('2 is prime', () => {
    expect(factorize(2)).toStrictEqual([2]);
  });

  test('3 is prime', () => {
    expect(factorize(3)).toStrictEqual([3]);
  });

  test('4 is 2*2', () => {
    expect(factorize(4)).toStrictEqual([2, 2]);
  });

  test('9 is 3*3', () => {
    expect(factorize(9)).toStrictEqual([3, 3]);
  });

  test('5 is prime', () => {
    expect(factorize(5)).toStrictEqual([5]);
  });

  test('42 is 2*3*7', () => {
    expect(factorize(42)).toStrictEqual([2, 3, 7]);
  });

  test('17640 is 2*2*2*3*3*5*7*7', () => {
    expect(factorize(17640)).toStrictEqual([2, 2, 2, 3, 3, 5, 7, 7]);
  });
});
