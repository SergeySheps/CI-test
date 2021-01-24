const mongoose = require('mongoose');

const ScheduleItemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
    },
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    members: [mongoose.Schema.Types.ObjectId],
    location: { type: mongoose.Schema.Types.ObjectId, ref: 'TrainingRoom' },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    __v: { type: Number, select: false },
  },
  {
    timestamps: true,
  },
);

ScheduleItemSchema.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('ScheduleItem', ScheduleItemSchema);
