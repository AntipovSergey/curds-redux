const express = require('express');
const morgan = require('morgan');
const curdsRouter = require('./routes/curd.router');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));

app.use('/api/curds', curdsRouter);

module.exports = app;
