const { ScheduleItem } = require('../../../DB/models');
const { timePeriods } = require('../../../constants/dateTime');
const { getStartAndEndPeriodDate } = require('../../utils/helpers/dateTime');
const scheduleService = new (require('../services/Schedule'))(ScheduleItem);

const createScheduleItem = async (req, res, next) => {
  try {
    const result = await scheduleService.createScheduleItem(req.body);

    res.json(result);
  } catch (err) {
    next(err);
  }
};

const deleteScheduleItem = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const result = await scheduleService.deleteScheduleItem(id);

    res.json(result);
  } catch (err) {
    next(err);
  }
};

const editScheduleItem = async (req, res, next) => {
  try {
    const { body } = req;

    const result = await scheduleService.editScheduleItem(body);

    res.json(result);
  } catch (err) {
    next(err);
  }
};

const getPeriodScheduleItems = async (req, res, next) => {
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

    const result = await scheduleService.getPeriodScheduleItems(
      startDate,
      endDate,
    );

    res.json(result);
  } catch (err) {
    next(err);
  }
};

const getScheduleResources = async (req, res, next) => {
  try {
    const result = await scheduleService.getScheduleResources();

    res.json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createScheduleItem,
  deleteScheduleItem,
  editScheduleItem,
  getPeriodScheduleItems,
  getScheduleResources,
};
