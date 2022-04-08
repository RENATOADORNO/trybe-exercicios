const BookService = require('../services/bookServices');

const getAll = async (req, res, next) => {
  try {
    const result = await BookService.getAll();

    return res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await BookService.getById(id);

    res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
};

module.exports = {
  getAll,
  getById,
}
