const { books: BooksModel } = require('../models');

const getAll = async () => {
  const results = await BooksModel.findAll();

  return results;
};

module.exports = {
  getAll,
}
