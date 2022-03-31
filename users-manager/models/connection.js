const mysql = require('mysql2/promise');

// Criamos uma "pool" de conexões
const connection = mysql.createPool({
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DB_NAME
});

module.exports = connection;