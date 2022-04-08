'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('books',
    [
      {
        title: 'Harry Potter e o Cálice de Fogo',
        author: 'J. K. Rowling',
        pageQuantity: 636,
        // usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'A Batalha do Labirinto - Percy Jackson e os Olimpianos',
        author: 'Rick Riordan',
        pageQuantity: 361,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('books', null, {}),
};
