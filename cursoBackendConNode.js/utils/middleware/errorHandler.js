const {config} = require('../../config/config');

const withErrorStact = (error, stack) => {
  if (config.dev) return {error, stack};
  return error;
};
const logErrors = (error, req, res, next) => {
  console.log(error);
  next(error);
};
const errorHandler = (error, req, res, next) => {
  res.status(error.status || 500);
  res.json(withErrorStact(error.message, error.stack));
};

module.exports = {
  logErrors,
  errorHandler,
};
