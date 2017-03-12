const math = require('../src/math');

describe('Math', () => {
  test('1 - The `add` function should correctly add the inputs', () => {
    expect(math.add(1, 2)).toBe(3);
    expect(math.add(10, 20)).toBe(30);
    expect(math.add(100, 200)).toBe(300);
  });

  test('2 - The `subtract` function should correctly subtract the inputs', () => {
    expect(math.subtract(10, 2)).toBe(8);
    expect(math.subtract(10, 5)).toBe(5);
    expect(math.subtract(10, 20)).toBe(-10);
  });

  test('3 - The `multiply` function should correctly multiply the inputs', () => {
    expect(math.multiply(10, 2)).toBe(20);
    expect(math.multiply(10, 5)).toBe(50);
    expect(math.multiply(10, 20)).toBe(200);
  });
});