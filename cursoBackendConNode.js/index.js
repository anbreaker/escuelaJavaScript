'use strict';
// To use more secure environment variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = require('./app');

// Start the server
const server = app.listen(app.get('port'), () => {
  //Only to use link on terminal with ctrl+click XD
  setTimeout(() => {
    console.log(`Server on Port: http://127.0.0.1:${app.get('port')}`);
  }, 100);
});
