const mongoose = require('mongoose');

const Chat = new mongoose.Schema({
  // messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
  messages: [
    {
      sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      text: { type: String, required: true },
      created_at: { type: Date, default: () => new Date() },
    },
  ],
  participants: [mongoose.Schema.Types.ObjectId],
  createdAt: { type: Date },
  __v: { type: Number, select: false },
});

Chat.pre('save', function(next) {
  if (!this.createdAt) {
    this.createdAt = new Date();
  }
  next();
});

module.exports = mongoose.model('Chat', Chat);
