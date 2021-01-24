const { Types } = require('mongoose');
// const _ = require('lodash');
// const { dalGame } = require('../../Game/DAL');
// const { dalUser } = require('../../Auth/DAL');

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('notifications', async function(data) {
      // const user = await dalUser.findByQueryWithPopulate({
      //   query: data.query.token,
      // });
      // let game = await dalGame.findByQuery({
      //   status: 'waiting',
      //   sort: { created_at: -1 },
      // });
      // if (_.isNil(game)) {
      //   game = await dalGame.create({
      //     userCross: Types.ObjectId(user._id),
      //   });
      //   socket.join(game._id);
      // } else {
      //   socket.join(game._id);
      //   await dalGame.findAndUpdate(query, {
      //     userZero: Types.ObjectId(user._id),
      //     status: 'playing',
      //   });
      //   socket.in(game._id).emit('gameStarted');
      // }
    });

    socket.on('message', async function(data) {
      //sender id = require(token (decoded)
      // body:{
      //  receiverId,
      //  text
      // }
    });

    socket.emit('start', { hello: 'world' });
  });
};
