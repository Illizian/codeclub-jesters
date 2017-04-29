const regex = require('../src/regex');

function enhancedTestResults(func, test, expected) {
  let input = `${ func }(${ test }) === ${ regex[func](test) }`;
  let output = `${ func }(${ test }) === ${ expected }`;

  return expect(input).toBe(output);
}

describe('Regex', () => {
  test('1 - Return true if `string` contains numbers', () => {
    enhancedTestResults('containsNumber', 'abc123', true);
    enhancedTestResults('containsNumber', 'abc', false);
  });

  test('2 - Return true if `string` contains a repeating letter', () => {
    enhancedTestResults('containsRepeatingLetter', 'bookkeeping', true);
    enhancedTestResults('containsRepeatingLetter', 'rattler', true);
    enhancedTestResults('containsRepeatingLetter', 'ZEPPELIN', true);
    enhancedTestResults('containsRepeatingLetter', 'cats', false);
    enhancedTestResults('containsRepeatingLetter', 'l33t', false);
  });

  test('3 - Return true if `string` ends with a vowel (aeiou)', () => {
    enhancedTestResults('endsWithVowel', 'cats', false);
    enhancedTestResults('endsWithVowel', 'gorilla', true);
    enhancedTestResults('endsWithVowel', 'I KNOW KUNG FU', true);
  });

  test('4 - Return the first series of three numbers', () => {
    enhancedTestResults('captureThreeNumbers', 'abc123', '123');
    enhancedTestResults('captureThreeNumbers', '9876543', '987');
    enhancedTestResults('captureThreeNumbers', 'abcdef', false);
    enhancedTestResults('captureThreeNumbers', '12ab12ab', false);
  });

  test('5 - Return true if `string` matches pattern', () => {
    // the pattern is 0XXXX XXXXXX where all X's are digits
    enhancedTestResults('matchesPattern', '01111 123456', true);
    enhancedTestResults('matchesPattern', '07777 123456', true);
    enhancedTestResults('matchesPattern', '97777 123456', false);
    enhancedTestResults('matchesPattern', '47777 123456', false);
    enhancedTestResults('matchesPattern', 'AAAAA 123456', false);
    enhancedTestResults('matchesPattern', '01111123456', false);
    enhancedTestResults('matchesPattern', '(01111) 123456', false);
    enhancedTestResults('matchesPattern', '(01111)123456', false);
  });

  test('6 - Return true if `string` contains correctly-formatted monetary amounts in GBP', () => {
    enhancedTestResults('isGBP', '£1320.03', true);
    enhancedTestResults('isGBP', '£132.03', true);
    enhancedTestResults('isGBP', '£32.03', true);
    enhancedTestResults('isGBP', '£2.03', true);
    enhancedTestResults('isGBP', '£1,023,032.03', true);
    enhancedTestResults('isGBP', '£20,933,209.93', true);
    enhancedTestResults('isGBP', '£20,933,209', true);
    enhancedTestResults('isGBP', '£459,049,393.21', true);
    enhancedTestResults('isGBP', '£1234,344.34', false);
    enhancedTestResults('isGBP', '34,344.34', false);
    enhancedTestResults('isGBP', '£,344.34', false);
    enhancedTestResults('isGBP', '£34,344.3', false);
    enhancedTestResults('isGBP', '£34,344.344', false);
    enhancedTestResults('isGBP', '£34,344_34', false);
    enhancedTestResults('isGBP', '£3,432,12.12', false);
    enhancedTestResults('isGBP', '£3,432,1,034.12', false);
    enhancedTestResults('isGBP', '4£3,432,034.12', false);
    enhancedTestResults('isGBP', '£2.03.45', false);
  });
});
