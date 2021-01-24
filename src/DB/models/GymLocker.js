const mongoose = require('mongoose');

const status = ['Available', 'Booked'];

const GymLocker = new mongoose.Schema({
  status: {
    type: String,
    enum: status,
    default: 'Available',
  },
  number: {
    type: String,
    required: true,
  },
  __v: { type: Number, select: false },
});

GymLocker.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('GymLocker', GymLocker);
