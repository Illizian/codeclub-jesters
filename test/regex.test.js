const regex = require('../src/regex');

describe('Regex', () => {
  test('1 - Return true if `string` contains numbers', () => {
    expect(regex.containsNumber('abc123')).toBe(true);
    expect(regex.containsNumber('abc')).toBe(false);
  });

  test('2 - Return true if `string` contains a repeating letter', () => {
    expect(regex.containsRepeatingLetter('bookkeeping')).toBe(true);
    expect(regex.containsRepeatingLetter('rattler')).toBe(true);
    expect(regex.containsRepeatingLetter('ZEPPELIN')).toBe(true);
    expect(regex.containsRepeatingLetter('cats')).toBe(false);
    expect(regex.containsRepeatingLetter('l33t')).toBe(false);
  });

  test('3 - Return true if `string` ends with a vowel (aeiou)', () => {
    expect(regex.endsWithVowel('cats')).toBe(false);
    expect(regex.endsWithVowel('gorilla')).toBe(true);
    expect(regex.endsWithVowel('I KNOW KUNG FU')).toBe(true);
  });

  test('4 - Return the first series of three numbers', () => {
    expect(regex.captureThreeNumbers('abc123')).toBe('123');
    expect(regex.captureThreeNumbers('9876543')).toBe('987');
    expect(regex.captureThreeNumbers('abcdef')).toBe(false);
    expect(regex.captureThreeNumbers('12ab12ab')).toBe(false);
  });

  test('5 - Return true if `string` matches pattern', () => {
    // the pattern is 0XXXX XXXXXX where all X's are digits
    expect(regex.matchesPattern('01111 123456')).toBe(true);
    expect(regex.matchesPattern('07777 123456')).toBe(true);
    expect(regex.matchesPattern('97777 123456')).toBe(false);
    expect(regex.matchesPattern('47777 123456')).toBe(false);
    expect(regex.matchesPattern('AAAAA 123456')).toBe(false);
    expect(regex.matchesPattern('01111123456')).toBe(false);
    expect(regex.matchesPattern('(01111) 123456')).toBe(false);
    expect(regex.matchesPattern('(01111)123456')).toBe(false);
  });

  test('6 - Return true if `string` contains correctly-formatted monetary amounts in GBP', () => {
    expect(regex.isGBP('£132.03')).toBe(true);
    expect(regex.isGBP('£32.03')).toBe(true);
    expect(regex.isGBP('£2.03')).toBe(true);
    expect(regex.isGBP('£1,023,032.03')).toBe(true);
    expect(regex.isGBP('£20,933,209.93')).toBe(true);
    expect(regex.isGBP('£20,933,209')).toBe(true);
    expect(regex.isGBP('£459,049,393.21')).toBe(true);
    expect(regex.isGBP('34,344.34')).toBe(false);
    expect(regex.isGBP('£,344.34')).toBe(false);
    expect(regex.isGBP('£34,344.3')).toBe(false);
    expect(regex.isGBP('£34,344.344')).toBe(false);
    expect(regex.isGBP('£34,344_34')).toBe(false);
    expect(regex.isGBP('£3,432,12.12')).toBe(false);
    expect(regex.isGBP('£3,432,1,034.12')).toBe(false);
    expect(regex.isGBP('4£3,432,034.12')).toBe(false);
    expect(regex.isGBP('£2.03.45')).toBe(false);
  });
});
