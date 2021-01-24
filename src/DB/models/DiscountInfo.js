const mongoose = require('mongoose');

const DiscountInfoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  descriptionPoints: [String],
  __v: { type: Number, select: false },
});

if (!DiscountInfoSchema.options.toObject) {
  DiscountInfoSchema.options.toObject = {};
}

DiscountInfoSchema.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('DiscountInfo', DiscountInfoSchema);
