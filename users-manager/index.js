const express = require('express')
const bodyParser = require('body-parser');

const app = express();

// Instalamos o middleware que faz a leitura e conversão do corpo das requisições em JSON
app.use(bodyParser.json());
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Online na porta ${PORT}!`))