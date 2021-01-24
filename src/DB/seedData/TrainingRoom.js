const addHours = require('date-fns/addHours');
const addDays = require('date-fns/addDays');

module.exports = {
  model: 'TrainingRoom',
  clearBeforeUpdate: true,
  data: [
    {
      roomName: 'Room 1',
      startBookDate: addHours(new Date(), 1),
      endBookDate: addHours(new Date(), 3),
    },
    {
      roomName: 'Room 2',
      startBookDate: addHours(addDays(new Date(), 1), 1),
      endBookDate: addHours(addDays(new Date(), 1), 4),
    },
    {
      roomName: 'Room 3',
      startBookDate: addHours(addDays(new Date(), 3), 1),
      endBookDate: addHours(addDays(new Date(), 3), 2),
    },
  ],
};
