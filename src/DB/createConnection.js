const mongoose = require('mongoose');
const config = require('../../config/env');
const logger = require('../logger');
// eslint-disable-next-line no-unused-vars
const seedMongo = require('./seedMongo');

module.exports = function createDBConnection() {
  function connect(connectionAttempt = 5) {
    return mongoose
      .connect(config.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .catch((err) => {
        if (connectionAttempt > 0) {
          logger.info('MongoDB connection unsuccessful, retry after 5 seconds');

          return new Promise((resolve) => {
            setTimeout(() => resolve(connect(connectionAttempt - 1)), 5000);
          });
        }

        logger.error('MongoDB connection failed after 5 retries');

        return Promise.reject(err);
      });
  }
  mongoose.set('useCreateIndex', true);
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  config.DEV && mongoose.set('debug', true);

  mongoose.connection.on('connected', () => {
    // seedMongo();
    logger.info('Mongoose default connection is open');
  });

  mongoose.connection.on('error', (err) => {
    logger.error(`Mongoose default connection has occurred ${err} error`);
  });

  mongoose.connection.on('disconnected', () => {
    logger.info('Mongoose default connection is disconnected');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      logger.info(
        'Mongoose default connection is disconnected due to application termination',
      );
      process.exit(0);
    });
  });

  return connect(5);
};
