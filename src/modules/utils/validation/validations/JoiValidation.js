const Joi = require('joi-browser');

const validatePassword = Joi.string()
  .min(6)
  .required()
  .error((errors) => {
    errors.forEach((err) => {
      switch (err.type) {
        case 'any.empty':
          err.message = 'Value should not be empty!';
          break;
        case 'string.min':
          err.message = `Value should have at least ${err.context.limit} characters!`;
          break;
        default:
          break;
      }
    });
    return errors;
  });

module.exports = {
  validatePassword,
};
