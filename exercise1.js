const assert = require('assert');
const data = require('./list_of_books');

const { books } = data;

function authorBornIn1947() {
  return books.find((book) => book.author.birthYear === 1947).author.name;
}

assert.strictEqual(authorBornIn1947(), 'Stephen King');
