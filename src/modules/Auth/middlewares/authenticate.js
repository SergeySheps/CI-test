const passport = require('passport');

const webLocalPassport = passport.authenticate('webLocal', {
  session: false,
  failureRedirect: '/',
});

const mobileLocalPassport = passport.authenticate('mobileLocal', {
  session: false,
});

module.exports = {
  webLocalPassport,
  mobileLocalPassport,
};
