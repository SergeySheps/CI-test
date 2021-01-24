const mongoose = require('mongoose');

const ClientVisitsStatisticSchema = new mongoose.Schema(
  {
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
    endDate: { type: Date, default: null },
    __v: { type: Number, select: false },
  },
  {
    timestamps: { createdAt: 'startDate' },
  },
);

ClientVisitsStatisticSchema.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model(
  'ClientVisitsStatistic',
  ClientVisitsStatisticSchema,
);
