const assert = require('assert');
const data = require('./list_of_books');

const { books } = data;

const expectedResult = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

function nameAndAge() {
  const authorAge = books.map((book) => ( // -> retorna objeto
    {age: book.releaseYear - book.author.birthYear, author: book.author.name,}
  ));
  return authorAge.sort((obj1, obj2) => obj1.age - obj2.age);
}

assert.deepStrictEqual(nameAndAge(), expectedResult);