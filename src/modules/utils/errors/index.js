const errorList = require('./errorList');
const logger = require('../../../logger');

module.exports = (err, req, res, next) => {
  logger.error(err);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  let customError = null;

  if (err.message) {
    customError = errorList[err.message];
  }

  if (customError) {
    const response = {
      error: customError,
    };

    res.status(customError.status || 500).json(response);
  } else {
    const response = {
      error: { message: err.message, status: err.status },
    };

    res.status(err.status || 500).json(response);
  }
};
