const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
  },
  profilePicture: {
    type: String, // Store a URL to the image file
  },
  authentication: {
    passwordHash: {
      type: String,
      required: true,
    },
    authToken: {
      type: String,
    },
  },
  paymentInformation: {
    creditCardNumber: {
      type: String,
    },
    paymentGatewayInfo: {
      gatewayName: String,
      accountNumber: String,
    },
  },
  tripsHistory: [
    {
      startLocation: String,
      endLocation: String,
      timestamp: Date,
      fareAmount: Number,
      driverRating: Number,
      riderRating: Number,
    },
  ],
  ratingsAndReviews: [
    {
      reviewText: String,
      rating: Number,
      reviewer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    },
  ],
  savedAddresses: [
    {
      alias: String,
      address: String,
    },
  ],
  settingsAndPreferences: {
    notifications: {
      push: Boolean,
      email: Boolean,
    },
    language: String,
  },
  timestamps: {
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  verificationStatus: {
    type: String,
    enum: ['unverified', 'email-verified', 'phone-verified'],
    default: 'unverified',
  },
  socialMediaProfiles: {
    facebook: String,
    twitter: String,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
