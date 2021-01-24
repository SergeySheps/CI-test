const addHours = require('date-fns/addHours');
const addDays = require('date-fns/addDays');

module.exports = {
  model: 'ClientVisitsStatistic',
  clearBeforeUpdate: true,
  data: [
    {
      endDate: addHours(new Date(), 3),
    },
    {
      endDate: addHours(addDays(new Date(), 1), 4),
    },
    {
      endDate: addHours(addDays(new Date(), 3), 2),
    },
  ],
};
