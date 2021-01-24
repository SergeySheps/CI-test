const startOfWeek = require('date-fns/startOfWeek');
const startOfMonth = require('date-fns/startOfMonth');
const addDays = require('date-fns/addDays');
const getDaysInMonth = require('date-fns/getDaysInMonth');
const startOfDay = require('date-fns/startOfDay');
const endOfDay = require('date-fns/endOfDay');

const { timePeriods } = require('../../../constants/dateTime');

const getStartAndEndPeriodDate = (period, date) => {
  const startOfDate = startOfDay(date);
  let startDate = startOfDate;
  let endDate = endOfDay(date);

  switch (period) {
    case timePeriods.week:
      startDate = startOfWeek(startOfDate, { weekStartsOn: 1 });
      endDate = addDays(startDate, 6);
      break;
    case timePeriods.month:
      startDate = startOfMonth(startOfDate);
      endDate = addDays(startDate, getDaysInMonth(startOfDate) - 1);
      break;
  }
  return {
    startDate,
    endDate,
  };
};

const getPeriodStatisticDate = (daysCount, startDate) => {
  return new Array(daysCount).fill(startDate).map((date, ind) => {
    if (ind === 0) {
      return date;
    }

    return addDays(date, ind);
  });
};

module.exports = {
  getStartAndEndPeriodDate,
  getPeriodStatisticDate,
};
