const addHours = require('date-fns/addHours');
const addDays = require('date-fns/addDays');

module.exports = {
  model: 'ScheduleItem',
  clearBeforeUpdate: true,
  data: [
    {
      title: 'baseMeeting',
      members: [],
      startDate: addHours(new Date(), 1),
      endDate: addHours(new Date(), 3),
    },
    {
      title: 'Training',
      members: [],
      startDate: addHours(addDays(new Date(), 1), 1),
      endDate: addHours(addDays(new Date(), 1), 4),
    },
    {
      title: 'newTraining',
      members: [],
      startDate: addHours(addDays(new Date(), 3), 1),
      endDate: addHours(addDays(new Date(), 3), 2),
    },
  ],
};
