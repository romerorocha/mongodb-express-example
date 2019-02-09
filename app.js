const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(bodyParser.json());
routes(app);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

module.exports = app;
