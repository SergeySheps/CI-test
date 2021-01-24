module.exports = {
  DEV: false,
  DB_URL: `mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_PASSWORD}@firsttry-syd3a.mongodb.net/test?retryWrites=true&w=majority`,
  PORT: process.env.PORT,
  HOST_NAME: 'https://spt-stage.herokuapp.com/',
  DISABLE_CORS: false,
};
