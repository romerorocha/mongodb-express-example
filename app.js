const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/muber', { useNewUrlParser: true });

app.use(bodyParser.json());

routes(app);

module.exports = app;
