const assert = require('assert');
const data = require('./list_of_books');

const { books } = data;

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  const wantedGenres = ['Fantasia', 'Ficção Científica'];
  return books
    .filter((book) => wantedGenres.includes(book.genre))
    .map((book) => book.author.name).sort();
}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);
