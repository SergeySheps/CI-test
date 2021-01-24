module.exports = {
  DEV: true,
  DB_URL: 'mongodb://mongo:27017/nodeApp', //`mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_PASSWORD}@firsttry-syd3a.mongodb.net/test?retryWrites=true&w=majority`,
  PORT: 3001,
  HOST_NAME: 'http://192.168.100.16:3001/', //android doesn't work with 'localhost'
  DISABLE_CORS: true,
};
