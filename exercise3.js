const assert = require('assert');
const data = require('./list_of_books');

const { books } = data;

const expectedResult = 43;

function averageAge() {
  const numberOfBooks = books.length;
  const sumOfAges = books.reduce((sum, book) => (
    sum + (book.releaseYear - book.author.birthYear)
  ), 0);
  return sumOfAges / numberOfBooks;
}

assert.strictEqual(averageAge(), expectedResult);
