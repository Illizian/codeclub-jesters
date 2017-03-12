const rewire = require('rewire');

const variables = rewire('./src/variables.js'); // Rewire is bork - relative requires broken

describe('Variables', () => {
  test('1 - Define a variable called `title` with a value of \'Mr\'', () => {
    let title = variables.__get__('title');

    expect(title).toBeDefined();
    expect(title).toBe('Mr');
  });

  test('2 - Define a variable called `firstname` with a value of \'Tim\'', () => {
    let firstname = variables.__get__('firstname');

    expect(firstname).toBeDefined();
    expect(firstname).toBe('Tim');
  });

  test('3 - Define a variable called `surname` with a value of \'Smith\'', () => {
    let surname = variables.__get__('surname');

    expect(surname).toBeDefined();
    expect(surname).toBe('Smith');
  });

  test('4 - Define a variable called `age` with a value of 30', () => {
    let age = variables.__get__('age');

    expect(age).toBeDefined();
    expect(age).toBe(30);
  });

  test('5 - Define a variable called `smoker` with a value of true', () => {
    let smoker = variables.__get__('smoker');

    expect(smoker).toBeDefined();
    expect(smoker).toBe(true);
  });

  test('6 - Define a variable called `skills` with an array of strings \'Art\', \'Science\' & \'Math\'', () => {
    let skills = variables.__get__('skills');

    expect(skills).toBeDefined();
    expect(skills).toEqual(['Art', 'Science', 'Math']);
  });

  test('7 - Define a variable called `contact` with an object.', () => {
    let contact = variables.__get__('contact');

    expect(contact).toBeDefined();
    expect(contact.telephone).toBe('01999 123456');
    expect(contact.mobile).toBe('07777 123456');
  });

  test('8 - Define a variable called `person` with an object.', () => {
    let title = variables.__get__('title');
    let firstname = variables.__get__('firstname');
    let surname = variables.__get__('surname');
    let age = variables.__get__('age');
    let smoker = variables.__get__('smoker');
    let skills = variables.__get__('skills');
    let contact = variables.__get__('contact');
    let person = variables.__get__('person');

    expect(person.title).toBe(title);
    expect(person.firstname).toBe(firstname);
    expect(person.surname).toBe(surname);
    expect(person.age).toBe(age);
    expect(person.smoker).toBe(smoker);
    expect(person.skills).toBe(skills);
    expect(person.contact).toBe(contact);
  });

});