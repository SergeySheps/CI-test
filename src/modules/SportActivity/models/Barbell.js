const mongoose = require('mongoose');

const Barbell = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  count: [{ count: Number, weight: Number }],
  created_at: { type: Date },
  updated_at: { type: Date },
  __v: { type: Number, select: false },
});

Barbell.pre('save', function(next) {
  const now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});

module.exports = mongoose.model('Barbell', Barbell);
