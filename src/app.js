const express = require("express");
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.use(require('./routes/index'));
app.use(require('./routes/clientes'));
app.use(require('./routes/productos'));

module.exports = app;