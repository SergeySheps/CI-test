const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  let token = req.headers['authorization'];

  if (token && token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        throw new Error('15');
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    throw new Error('14');
  }
};

module.exports = verifyToken;
