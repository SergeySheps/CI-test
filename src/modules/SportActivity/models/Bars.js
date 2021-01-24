const mongoose = require('mongoose');

const Bars = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  count: [Number],
  created_at: { type: Date },
  updated_at: { type: Date },
  __v: { type: Number, select: false },
});

Bars.pre('save', function(next) {
  const now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});

module.exports = mongoose.model('Bars', Bars);
