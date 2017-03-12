const objects = require('../src/objects');

describe('Objects', () => {
  test('1 - Return an object with the properties:', () => {
    let output = objects.message('Mr Tim Smith', 'A Message');

    expect(output).toBeDefined();
    expect(output.author).toBe('Mr Tim Smith');
    expect(output.message).toBe('A Message');
    expect(output.date).toEqual(expect.any(Date));
  });

  test('2 - Generate a fullname string from the `person` object, it should take the form Mr Tim Smith.', () => {
    expect(objects.getFullname({ title: 'Mr', firstname: 'Tim', surname: 'Smith' })).toBe('Mr Tim Smith');
    expect(objects.getFullname({ title: 'Ms', firstname: 'Jane', surname: 'Doe' })).toBe('Ms Jane Doe');
    expect(objects.getFullname({ title: 'Miss', firstname: 'Jill', surname: 'Smith' })).toBe('Miss Jill Smith');
    expect(objects.getFullname({ title: 'Mr', firstname: 'Lee', surname: 'Hyde' })).toBe('Mr Lee Hyde');
  });

  test('3 - Return the value of the given `property` in `object`', () => {
    expect(objects.getPropertyValue({ foo: 'bar' }, 'foo')).toBe('bar');
    expect(objects.getPropertyValue({ bar: 'foo' }, 'bar')).toBe('foo');
    expect(objects.getPropertyValue({ name: 'Tim', foo: 'bar' }, 'name')).toBe('Tim');
    expect(objects.getPropertyValue({ name: 'Tim', foo: 'bar' }, 'foo')).toBe('bar');
  });
});