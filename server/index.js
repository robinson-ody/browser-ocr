const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const port = process.env.PORT || 8000;
const log = require('morgan')('dev');
const chalk = require('chalk');

app.use(log);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  if (req.method === 'OPTIONS') {
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    return res.status(200).json({});
  }

  next();
});

// * Routes to return static index.html file
app.use(express.static(__dirname + '/public/'));
app.use('/api', routes);
app.use('/images', express.static(__dirname + '/images/'));

const cb = (req, res) => {
  res.status(200).sendFile(__dirname + '/public/index.html');
};

app.get('/', cb);
app.get(/.*/, (req, res) =>
  res.status(404).sendFile(__dirname + '/public/index.html')
);

app.listen(port, (error) => {
  if (error) return console.log(error);
  console.log(chalk.bold.cyan(`Server is listening on port ${port}`));
});
