const { StaminaRopeJumping } = require('../models');
// const { Chat } = require('../../SocketActivity/models');

const findByQuery = async (query, select = '', populatePath) => {
  const result = await StaminaRopeJumping.findOne(query)
    .lean()
    .populate(populatePath)
    .select(select);

  return result;
};

const create = async (data) => {
  const resultDoc = await StaminaRopeJumping.create(data);

  return resultDoc;
};

const update = async (data) => {
  const updatedData = await StaminaRopeJumping.findOneAndUpdate(
    { _id: data.id },
    {
      $push: {
        times: data.time,
      },
    },
    { new: true },
  ).lean();

  return updatedData;
};

module.exports = { create, findByQuery, update };
