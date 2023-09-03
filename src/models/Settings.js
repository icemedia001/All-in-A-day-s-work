const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  notifications: {
    push: Boolean,
    email: Boolean,
  },
  language: {
    type: String,
  },
});

const Settings = mongoose.model('Settings', settingsSchema);

module.exports = Settings;
