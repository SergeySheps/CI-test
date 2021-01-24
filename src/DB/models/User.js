const mongoose = require('mongoose');
const crypto = require('crypto');
const _ = require('lodash');

const roles = ['coach', 'user'];

const UserSchema = new mongoose.Schema({
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
  username: {
    type: String,
    required: true,
  },
  photo: { type: Buffer },
  photoUri: { type: String, default: '' },
  role: {
    type: String,
    enum: roles,
    default: 'user',
  },
  salt: {
    type: String,
  },
  __v: { type: Number, select: false },
});

UserSchema.pre('save', function(next) {
  this.salt = crypto.randomBytes(128).toString('base64');
  this.password = this.encryptedPassword(this.password);

  next();
});

UserSchema.methods.encryptedPassword = function(password) {
  return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha1').toString();
};

UserSchema.methods.checkPassword = function(password) {
  let result = false;

  if (password && this.password) {
    result = _.isEqual(this.encryptedPassword(password), this.password);
  }

  return result;
};

UserSchema.set('toJSON', {
  virtuals: true,
  transform: function(doc, ret) {
    delete ret.password;
    delete ret.salt;

    return ret;
  },
});

module.exports = mongoose.model('User', UserSchema);
