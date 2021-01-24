const mongoose = require('mongoose');
const crypto = require('crypto');
const _ = require('lodash');

const status = ['Available', 'Vacation', 'Fired'];

const AdminSchema = new mongoose.Schema(
  {
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
    password: {
      type: String,
      required: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
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
    photo: { type: Buffer },
    photoUri: { type: String, default: '' },
    fireDate: { type: Date, default: null },
    role: { type: String, default: 'Admin' },
    status: {
      type: String,
      enum: status,
      default: 'Available',
    },
    salt: {
      type: String,
    },
    __v: { type: Number, select: false },
  },
  {
    timestamps: { createdAt: 'hireDate' },
  },
);

AdminSchema.pre('save', function(next) {
  this.salt = crypto.randomBytes(128).toString('base64');
  this.password = this.encryptedPassword(this.password);

  next();
});

AdminSchema.methods.encryptedPassword = function(password) {
  return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha1').toString();
};

AdminSchema.methods.checkPassword = function(password) {
  let result = false;

  if (password && this.password) {
    result = _.isEqual(this.encryptedPassword(password), this.password);
  }

  return result;
};

AdminSchema.set('toJSON', {
  virtuals: true,
  transform: function(doc, ret) {
    delete ret.password;
    delete ret.salt;

    return ret;
  },
});

module.exports = mongoose.model('Admin', AdminSchema);
