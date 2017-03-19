const arrays = require('../src/arrays');

describe('Arrays', () => {
  var arr;
  beforeEach(() => {
    arr = [1,2,3,4,5,6,7,8,9,10];
  });

  test('1 - Return the item from the `array` at the `index`', () => {
    expect(arrays.getItemAtIndex(arr, 4)).toBe(5);
  });

  test('2 - Return the index of a string as `item` from the `array`', () => {
    expect(arrays.findItemInArray(arr, 4)).toBe(3)
  });

  test('3 - Remove the item at the `index` in `array`', () => {
    expect(arrays.removeItemAtIndexInArray(arr, 4)).toEqual([1,2,3,4,6,7,8,9,10]);
  });

  test('4 - Add up all the numbers in `array` and return the total', () => {
    expect(arrays.sum(arr)).toBe(55)
  });

  test('5 - Remove all numbers in `array` that are larger than `min`', () => {
    expect(arrays.isBigger(arr, 5)).toEqual([6,7,8,9,10]);
  });

  test('6 - Double (x2) all numbers in the `array`', () => {
    expect(arrays.doubleItAll(arr)).toEqual([2,4,6,8,10,12,14,16,18,20]);
  });

  test('7 - Apply the `fn` function on every item in the `array`', () => {
    expect(arrays.applyFn(arr, num => num*2)).toEqual([2,4,6,8,10,12,14,16,18,20]);
  });

  test('8 - Return the amount of times `item` occur in `array`', () => {
    expect(arrays.countOccurences([1,2,3,1,1,2], 1)).toBe(3);
    expect(arrays.countOccurences([1,2,3,1,1,2], 1)).toBe(3);
  });
});