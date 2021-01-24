const mongoose = require('mongoose');
const path = require('path');
const requireAll = require('require-all');

function getAllSeeds() {
  return Object.values(
    requireAll({
      dirname: path.join(__dirname, '/seedData'),
      filter: /(.*)\.(js)$/,
    }),
  );
}

module.exports = async () => {
  const seeds = getAllSeeds();

  seeds.forEach(async (seed) => {
    const { model, data, clearBeforeUpdate } = seed;
    const SeedModel = mongoose.model(model);

    if (clearBeforeUpdate) {
      await SeedModel.deleteMany({}).exec();
    }

    await Promise.all(
      data.map(async (row) => {
        return SeedModel.create(row);
      }),
    );
  });
};
