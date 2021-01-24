const { Chat } = require('../models');

const findByQuery = async (
  query,
  select = '',
  population = { path: '', select: '' },
) => {
  const result = await Chat.findOne(query)
    .populate(population.path, population.select)
    .select(select);

  return result;
};

const findAllByQuery = async (
  query,
  select = '',
  population = { path: '', select: '' },
) => {
  const result = await Chat.find(query)
    .populate(population.path, population.select)
    .select(select);

  return result;
};

const create = async (data) => {
  // console.log('data: ', data);
  const message = {
    sender: '5d318b1392c5300a6ce8ec09'.toObjectId(),
    receiver: '5d318b1392c5300a6ce8ec09'.toObjectId(),
    text: 'Hello world!',
    created_at: new Date(),
  };
  const tempData = {
    messages: [message],
    participants: [
      '5d318b1392c5300a6ce8ec09'.toObjectId(),
      '5d318b1392c5300a6ce8ec09'.toObjectId(),
    ],
  };

  const result = await Chat.create(tempData);
  console.log('result: ', result);
  console.log('tempData: ', tempData);
  // const resultDoc = await StaminaRopeJumping.create(data);

  // return toObject(resultDoc);
};

const update = async (data) => {
  const message = {
    sender: '5d318b1392c5300a6ce8ec09'.toObjectId(),
    receiver: '5d318b1392c5300a6ce8ec09'.toObjectId(),
    text: 'Hello world!',
    created_at: new Date(),
  };

  const updatedData = await Chat.findOneAndUpdate(
    { _id: data.id },
    {
      $push: {
        messages: message,
      },
    },
    { new: true },
  ).lean();

  return updatedData;
};

module.exports = { create, findByQuery, findAllByQuery, update };
