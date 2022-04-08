const express = require('express');

const router = express.Router();

const BooksController = require('../controller/bookController');

router.get('/', BooksController.getAll);

module.exports = router;
