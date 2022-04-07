require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const user = require('./router/userRouter');
const error = require('./middlewares/error');

const app = express();

// Instalamos o middleware que faz a leitura e conversão do corpo das requisições em JSON
app.use(bodyParser.json());
app.use(express.json());

app.use('/user', user);
app.use(error);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Online na porta ${PORT}!`))
