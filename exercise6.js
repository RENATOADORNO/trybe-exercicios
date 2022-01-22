const assert = require('assert');
const data = require('./list_of_books');

const { books } = data;

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  // const oldBook = books.filter((book) => book.releaseYear < 1961);
  // return oldBook.map((book) => book.name);
  // ----ou-----
  return books
    .filter((book) => book.releaseYear < 1961)
    .map((book) => book.name);
}

assert.deepStrictEqual(oldBooks(), expectedResult);