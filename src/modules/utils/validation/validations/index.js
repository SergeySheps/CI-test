const Joi = require('joi-browser');
const _ = require('lodash');

const validate = (data, schema) => {
  let result;
  const response = Joi.validate(data, schema, {
    abortEarly: false,
  });

  if (response.error && response.error.details) {
    result = response.error.details.reduce((memo, item) => {
      const errorMessage = item.message;

      _.set(memo, item.path.join('.'), errorMessage);
      return memo;
    }, {});
  } else {
    result = {};
  }

  return result;
};

module.exports = validate;
