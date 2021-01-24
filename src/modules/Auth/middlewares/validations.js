const validate = require('../../utils/validation');

const signInValidation = (req, res, next) =>
  validate(req, res, next, 'validateSignIn');

const signUpValidation = (req, res, next) =>
  validate(req, res, next, 'validateSignUp');

module.exports = {
  signInValidation,
  signUpValidation,
};
