const _ = require('lodash');
const jwt = require('jsonwebtoken');

class Auth {
  constructor(model) {
    this.model = model;
  }

  async signUp(userData, modelsForCheck = [this.model]) {
    const query = { email: userData.email };
    await this.checkUserExists(modelsForCheck, query);

    const user = (await this.model.create(userData)).toObject();

    const token = jwt.sign(user, process.env.JWT_SECRET);
    const result = {
      ...user,
      token,
    };

    return result;
  }

  async checkUserExists(models, query) {
    const result = await Promise.all(
      models.map((model) => model.findOne(query)),
    );

    const existedEntity = result.find((el) => !_.isNil(el));
    if (existedEntity) {
      throw new Error('2');
    }
  }
}

module.exports = Auth;
