const Local = require('passport-local');
const jwt = require('jsonwebtoken');
const { User, Coach } = require('../../../DB/models');

module.exports = new Local.Strategy(
  { usernameField: 'email' },
  async (email, password, done) => {
    try {
      const query = { email };
      const [coach, regularUser] = await Promise.all([
        Coach.findOne(query).select('-photo'),
        User.findOne(query).select('-photo'),
      ]);

      const user = coach || regularUser;

      if (!user || !user.checkPassword(password)) {
        throw new Error('8');
      }

      const userResult = user.toObject();

      const token = jwt.sign(userResult, process.env.JWT_SECRET);
      const result = {
        ...userResult,
        token,
      };

      return done(null, result);
    } catch (err) {
      return done(err);
    }
  },
);
