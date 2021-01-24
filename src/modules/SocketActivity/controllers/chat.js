const _ = require('lodash');

const chat = require('../DAL/Chat');

// export const createJumpingProgress = async (req, res) => {
//   const data = {
//     user: req.decoded._id,
//     times: [req.body.time],
//   };

//   const result = await dalStaminaRopeJumping.create(data);

//   res.json(result);
// };

const getMessages = async (req, res) => {
  const result = await chat.findAllByQuery(
    {
      participants: req.params.id.toObjectId(),
    },
    '',
    { path: 'messages.sender', select: '_id email' },
  );

  res.json(result);
};

// export const updateJumpingProgress = async (req, res) => {
//   const result = await dalStaminaRopeJumping.update({
//     ...req.body,
//     id: req.body.id.toObjectId(),
//   });

//   res.json(result);
// };

module.exports = {
  getMessages,
};
