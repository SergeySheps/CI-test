const router = require('express').Router();
const { signIn, signUp } = require('../controllers/auth');
const asyncMiddleware = require('../../utils/middlewares/asyncMiddleware');
const {
  mobileLocalPassport,
  webLocalPassport,
} = require('../middlewares/authenticate');
const { signUpValidation } = require('../middlewares/validations');

router.post('/mobileSignUp', signUpValidation, asyncMiddleware(signUp));
router.post('/mobileSignIn', mobileLocalPassport, signIn);

router.post('/webSignIn', webLocalPassport, signIn);

module.exports = router;
