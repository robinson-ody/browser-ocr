const mysql = require('mysql');
const chalk = require('chalk');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'ocr_test'
});

conn.connect(error => {
  if (error) {
    return console.log(chalk.bold.red('Error connecting to database: ' + error));
  }

  console.log(chalk.bold.blue('Connected to database'));
});

module.exports = conn;
