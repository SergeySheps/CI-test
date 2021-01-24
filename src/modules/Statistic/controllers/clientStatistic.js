const getDaysInMonth = require('date-fns/getDaysInMonth');
const format = require('date-fns/format');
const { ClientVisitsStatistic } = require('../../../DB/models');
const clientStatisticService = new (require('../services/Statistic'))(
  ClientVisitsStatistic,
);
const { timePeriods } = require('../../../constants/dateTime');
const {
  getStartAndEndPeriodDate,
  getPeriodStatisticDate,
} = require('../../utils/helpers/dateTime');

const getGeneralClientVisitStatistic = async (req, res, next) => {
  try {
    const {
      query: { period, date },
    } = req;
    if (!timePeriods.hasOwnProperty(period)) {
      throw new Error('11'); // todo: Joi validation
    }
    const requestedDate = new Date(date);
    const { startDate, endDate } = getStartAndEndPeriodDate(
      period,
      requestedDate,
    );
    const statisticData = await clientStatisticService.getGeneralClientVisitStatistic(
      startDate,
      endDate,
    );

    let daysCount = getDaysInMonth(requestedDate);
    switch (period) {
      case timePeriods.week:
        daysCount = 7;
        break;
      case timePeriods.month:
        daysCount = getDaysInMonth(requestedDate);
        break;
    }
    const dates = getPeriodStatisticDate(daysCount, startDate);
    const result = dates.map((date) => {
      const currentDate = format(date, 'dd.MM');

      const visitersCount = statisticData.filter((data) => {
        const temp = format(data.startDate, 'dd.MM') === currentDate;
        return temp;
      });

      return {
        name: currentDate,
        visitersCount: visitersCount.length,
      };
    });

    res.json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getGeneralClientVisitStatistic,
};
