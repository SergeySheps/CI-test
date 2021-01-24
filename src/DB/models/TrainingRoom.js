const mongoose = require('mongoose');

const TrainingRoomSchema = new mongoose.Schema({
  roomName: {
    type: String,
    required: true,
  },
  startBookDate: { type: Date, required: true },
  endBookDate: { type: Date, required: true },
  __v: { type: Number, select: false },
});

TrainingRoomSchema.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('TrainingRoom', TrainingRoomSchema);
