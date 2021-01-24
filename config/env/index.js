const development = require('./development');
const production = require('./production');
const mongoose = require('mongoose');

String.prototype.toObjectId = () => {
  const ObjectId = mongoose.Types.ObjectId;

  return new ObjectId(this.toString());
};

const config = {
  development,
  production,
};

module.exports = Object.freeze(
  Object.assign(({}, config[process.env.NODE_ENV])),
);
