const mongoose = require('mongoose');

const visitStatuses = ['Active', 'Not Active'];
const genders = ['Male', 'Female'];

const ClientSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please fill a valid email address',
    ],
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  visitStatus: {
    type: String,
    enum: visitStatuses,
    default: 'Not Active',
  },
  gender: {
    type: String,
    enum: genders,
  },
  phoneNumber: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^\+375\((17|29|33|44)\)[0-9]{3}[0-9]{2}[0-9]{2}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  subscriptionCardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubscriptionCard',
  },
  coachId: { type: mongoose.Schema.Types.ObjectId, ref: 'Coach' },
  __v: { type: Number, select: false },
});

ClientSchema.virtual('fullName').get(function() {
  return this.firstName + ' ' + this.lastName;
});

ClientSchema.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('Client', ClientSchema);
