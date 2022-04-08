require('dotenv').config();
const express = require('express');
const BookRouter = require('./router/bookRouter');

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use('/books', BookRouter);

app.listen(PORT, () => console.log(`Online na porta ${PORT}!`))
