const assert = require('assert');
const data = require('./list_of_books');

const { books } = data;

function smallerName() {
  let nameBook;

  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

assert.strictEqual(smallerName(), 'Duna');