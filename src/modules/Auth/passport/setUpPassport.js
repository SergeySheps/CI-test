const webLocalStrategy = require('./webLocal');
const mobileLocalStrategy = require('./mobileLocal');

const setUpPassport = (passport) => {
  passport.use('webLocal', webLocalStrategy);
  passport.use('mobileLocal', mobileLocalStrategy);
};

module.exports = setUpPassport;
