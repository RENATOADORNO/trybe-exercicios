const express = require('express');
const router = express.Router();

const createUser = require('../middlewares/createUser');
const getAllUsers = require('../middlewares/getAllUsers');

router.post('/', createUser);
router.get('/', getAllUsers);

module.exports = router;
