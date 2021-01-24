class Statistic {
  constructor(model) {
    this.model = model;
  }

  // async createScheduleItem(data) {
  //   return await this.model.create(data);
  // }

  // async deleteScheduleItem(id) {
  //   return await this.model.deleteOne({ _id: id });
  // }

  // async editScheduleItem(body) {
  //   const { id, ...rest } = body;

  //   return await this.model.updateOne({ _id: id }, { $set: rest });
  // }

  async getGeneralClientVisitStatistic(startDate, endDate) {
    const visits = await this.model.find({
      startDate: {
        $gte: startDate,
        $lte: endDate,
      },
    });

    return visits;
  }

  // async getScheduleResources() {
  //   const [rooms, coaches, clients] = await Promise.all([
  //     TrainingRoom.find({}),
  //     Coach.find({}),
  //     Client.find({}),
  //   ]);

  //   const roomInstances = rooms.map((el) => {
  //     return {
  //       id: el._id,
  //       text: el.roomName,
  //     };
  //   });

  //   const coachInstances = coaches.map((el) => {
  //     return {
  //       id: el._id,
  //       text: el.fullName,
  //     };
  //   });

  //   const clientInstances = clients.map((el) => {
  //     return {
  //       id: el._id,
  //       text: el.fullName,
  //     };
  //   });

  //   const memberInstances = [...coachInstances, ...clientInstances];

  //   return {
  //     roomInstances,
  //     memberInstances,
  //   };
  // }
}

module.exports = Statistic;
