class Discounts {
  constructor(model) {
    this.model = model;
  }

  // async deleteUser(id) {
  //   return await this.model.deleteOne({ _id: id });
  // }

  // async editUser(body) {
  //   const { _id, ...rest } = body;

  //   return await this.model.updateOne({ _id }, { $set: rest });
  // }

  // async getUser(id) {
  //   const user = await this.model.findById(id);

  //   return user;
  // }

  async getAllItems() {
    return await this.model.find({});
  }
}

module.exports = Discounts;
