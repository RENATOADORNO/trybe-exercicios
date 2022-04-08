const { books: BooksModel } = require('../models');

const getAll = async () => {
  // Bônus: Crie uma ordenação no endpoint GET /books para ordenar por ordem alfabética 
  // e por data de criação;
  const results = await BooksModel.findAll({ order: [ ['title', 'ASC'], ['createdAt', 'ASC'] ]});

  return results;
};

module.exports = {
  getAll,
}
