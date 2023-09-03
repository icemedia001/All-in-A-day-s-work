const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  driverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Driver',
    required: true,
  },
  riderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rider',
    required: true,
  },
  pickupLocation: {
    type: String,
    required: true,
  },
  dropoffLocation: {
    type: String,
    required: true,
  },
  scheduledPickupTime: {
    type: Date,
    required: true,
  },
  actualPickupTime: {
    type: Date,
  },
  rideStatus: {
    type: String,
    enum: ['pending', 'in-progress', 'completed', 'canceled'],
    default: 'pending',
  },
  fareAmount: {
    type: Number,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ['unpaid', 'paid'],
    default: 'unpaid',
  },
  driverRating: {
    type: Number,
  },
  riderRating: {
    type: Number,
  },
  distanceTraveled: {
    type: Number,
  },
  duration: {
    type: Number,
  },
  paymentMethod: {
    type: String,
  },
  promoCode: {
    type: String,
  },
  cancellationReason: {
    type: String,
  },
  rideHistory: [
    {
      startLocation: String,
      endLocation: String,
      timestamp: Date,
      fareAmount: Number,
      driverRating: Number,
      riderRating: Number,
    },
  ],
  additionalFees: {
    type: Number,
  },
  rideType: {
    type: String,
  },
  driverComments: {
    type: String,
  },
  riderComments: {
    type: String,
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
});

const Ride = mongoose.model('Ride', rideSchema);

module.exports = Ride;
