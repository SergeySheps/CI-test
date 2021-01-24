const { DiscountInfo, SubscriptionCard } = require('../../../DB/models');
const discountInfoService = new (require('../services/Discounts'))(
  DiscountInfo,
);
const subscriptionService = new (require('../services/Discounts'))(
  SubscriptionCard,
);

const getAllDiscounts = async (req, res, next) => {
  try {
    const result = await discountInfoService.getAllItems();

    res.json(result);
  } catch (err) {
    next(err);
  }
};

const getAllSubscriptionCards = async (req, res, next) => {
  try {
    const result = await subscriptionService.getAllItems();

    res.json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllDiscounts,
  getAllSubscriptionCards,
};
