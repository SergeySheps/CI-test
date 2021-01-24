const { User } = require('../../../DB/models');
const mongoose = require('mongoose');

const findByQuery = async (query, select = '') => {
  const user = await User.findOne(query).select(select);

  return user ? user.toObject() : null;
};

const findById = async (id, select = '') => {
  const user = await User.findById(mongoose.Types.ObjectId(id)).select(select);

  return user.toObject();
};

const updateById = async (id, data) => {
  const updateResult = await User.updateOne(
    { _id: id },
    {
      $set: data,
    },
  );

  return updateResult;
};

module.exports = { findByQuery, findById, updateById };
