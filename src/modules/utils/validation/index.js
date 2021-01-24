const schemas = require('./schemas');
const handleValidation = require('./validations');

const validateFunctions = {
  validateSignIn: (data) => {
    return handleValidation(data, schemas.signInSchema);
  },
  validateSignUp: (data) => {
    return handleValidation(data, schemas.signUpSchema);
  },
};

const errorHandler = (error, res, next) => {
  if (Object.keys(error).length) {
    res.status(500).json(error);
  } else {
    next();
  }
};

const validate = (req, res, next, funcName) => {
  const error = validateFunctions[funcName](req.body);
  errorHandler(error, res, next);
};

module.exports = validate;
