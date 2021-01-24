const dalUser = require('../DAL/User');

const getUserById = async (id, select) => {
  const user = await dalUser.findById(id, select);

  return user;
};

const updateUserPhoto = async (id, { photo, photoUri }) => {
  const user = await dalUser.updateById(id, { photo, photoUri });

  return user;
};

module.exports = {
  getUserById,
  updateUserPhoto,
};
