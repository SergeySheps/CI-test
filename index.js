require('dotenv').config();
const config = require('./config/env');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const express = require('express');
const http = require('http');
const io = require('socket.io');

const router = require('./src/routes');
const initializeSocket = require('./src/modules/SocketActivity/socketInit');
const verifySocketToken = require('./src/modules/utils/middlewares/verifySocketToken');
const errorHandler = require('./src/modules/utils/errors');
const setUpPassport = require('./src/modules/Auth/passport/setUpPassport');
const createDBConnection = require('./src/DB/createConnection');

const app = express();

const server = http.createServer(app);
config.DISABLE_CORS && app.use(cors());

setUpPassport(passport);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
// app.use(passport.session());
app.use('/api', router);
app.use(errorHandler);

createDBConnection();

const soketServer = io.listen(server);
soketServer.use(verifySocketToken);
initializeSocket(soketServer);

server.listen(config.PORT, () => {
  console.log(`Server started on port ${config.PORT}`);
});
