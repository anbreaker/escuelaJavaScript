'use strict';
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const {config} = require('./config/config');
const {logErrors, errorHandler} = require('./utils/middleware/errorHandler.js');

// Initializations
const app = express();

// Settings
app.set('port', config.port);

// Middlewares
app.use(morgan('dev'));

// Form sends data, understand it, but not accept images etc...(Method of Express)
app.use(express.urlencoded({extended: true}));

// Config Express Data
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// API's Routes './routes/api...';
app.use('/api/movies', require('./routes/movies'));

// Middlewares Errors
app.use(logErrors);
app.use(errorHandler);

// 404 Handler Error
app.use((req, res, next) => {
  res.status(404).send('404 Not Found');
});

// Start the server on './index.js'

module.exports = app;
