const getGymLockers = (count) => {
  return new Array(count).fill(null).map((el, ind) => ({ number: ind + 1 }));
};

module.exports = {
  model: 'GymLocker',
  clearBeforeUpdate: true,
  data: getGymLockers(25),
};
