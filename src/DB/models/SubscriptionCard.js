const mongoose = require('mongoose');

const cardTypes = ['Base', 'Medium', 'Premium'];

const SubscriptionCardSchema = new mongoose.Schema({
  cardName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: cardTypes,
    default: 'Base',
  },
  daysDuration: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  __v: { type: Number, select: false },
});

if (!SubscriptionCardSchema.options.toObject) {
  SubscriptionCardSchema.options.toObject = {};
}

SubscriptionCardSchema.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('SubscriptionCard', SubscriptionCardSchema);
