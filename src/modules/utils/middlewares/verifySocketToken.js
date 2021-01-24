const jwt = require('jsonwebtoken');

module.exports = (socket, next) => {
  const hasToken = socket.handshake.query && socket.handshake.query.token;

  if (!hasToken) {
    throw new Error('14');
  }

  try {
    const result = jwt.verify(
      socket.handshake.query.token,
      process.env.JWT_SECRET,
    );

    socket.decoded = result;

    next();
  } catch (error) {
    throw new Error(error);
  }
};
