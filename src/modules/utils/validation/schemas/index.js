const Joi = require('joi-browser');
const { validatePassword } = require('../validations/JoiValidation');

const signUpSchema = Joi.object().keys({
  password: validatePassword,
  email: Joi.string().email(),
  username: Joi.string(),
  role: Joi.number(),
});

const signInSchema = Joi.object().keys({
  password: validatePassword,
  email: Joi.string().email(),
  username: Joi.string(),
  role: Joi.number(),
});

module.exports = {
  signUpSchema,
  signInSchema,
};
