const faker = require('faker');
const sentences = Array.from(Array(10).keys()).map(() => faker.lorem.sentences());
const sentence = Array.from(Array(10).keys()).map(() => faker.lorem.sentence());

const strings = require('../src/strings');

describe('Strings', () => {
  test('1 - Return `string` reduced to the the `length` specified', () => {
    let mocks = [
      ['Unde illum maiores et ex. Ut repellat aut delectus nemo eos ut qui magnam vitae.', 5, 'Unde '],
      ['Unde illum maiores et ex. Ut repellat aut delectus nemo eos ut qui magnam vitae.', 10, 'Unde illum'],
      ['Ut repellat aut delectus nemo eos ut qui magnam vitae.', 20, 'Ut repellat aut dele'],
      ['Ut repellat aut delectus nemo eos ut qui magnam vitae.', 25, 'Ut repellat aut delectus '],
      ['Unde illum maiores et ex.', 25, 'Unde illum maiores et ex.']
    ];

    mocks.forEach(mock => expect(strings.truncate(mock[0], mock[1])).toBe(mock[2]));
  });

  test('2 - Return true if `string` contains `searchString`', () => {
    let mocks = [
      ['An example string', 'example', true],
      ['An string with sausages', 'sausages', true],
      ['Another example string', 'foo', false],
      ['Superman Batman Flash', 'The Hulk', false],
      ['Superman Batman Flash', 'Batman', true]
    ];

    mocks.forEach(mock => expect(strings.contains(mock[0], mock[1])).toBe(mock[2]));
  });

  test('3 - Append `appendString` to `string` and return the new string', () => {
    let mocks = [
      ['An example string', 'APPEND', 'An example stringAPPEND'],
      ['An string with sausages', 'APPEND', 'An string with sausagesAPPEND'],
      ['Another example string', 'APPEND', 'Another example stringAPPEND'],
      ['Superman Batman Flash', 'APPEND', 'Superman Batman FlashAPPEND'],
      ['Superman Batman Flash', 'APPEND', 'Superman Batman FlashAPPEND']
    ];

    mocks.forEach(mock => expect(strings.append(mock[0], mock[1])).toBe(mock[2]));
  });

  test('4 - Append `prependString` to `string` and return the new string', () => {
    let mocks = [
      ['An example string', 'PREPEND', 'PREPENDAn example string'],
      ['An string with sausages', 'PREPEND', 'PREPENDAn string with sausages'],
      ['Another example string', 'PREPEND', 'PREPENDAnother example string'],
      ['Superman Batman Flash', 'PREPEND', 'PREPENDSuperman Batman Flash'],
      ['Superman Batman Flash', 'PREPEND', 'PREPENDSuperman Batman Flash']
    ];

    mocks.forEach(mock => expect(strings.prepend(mock[0], mock[1])).toBe(mock[2]));
  });
});