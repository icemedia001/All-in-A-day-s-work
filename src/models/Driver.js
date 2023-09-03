const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  fullName:{
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  driverLicense: {
    licenseNumber: String,
    issueDate: Date,
    expirationDate: Date,
    required: true,
  },
  vehicleInformation: {
    make: String,
    model: String,
    year: Number,
    licensePlate: String,
    type: String,
  },
  location: {
    type: {
      type: String,
      default: "Point",
    },
    coordinates: [Number],
    address: String,
  },
  availability: {
    type: Boolean,
    default: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  earnings: {
    totalEarnings: Number,
    earningsHistory: [
      {
        period: String,
        amount: Number,
      },
    ],
  },
  tripsHistory: [
    {
      startLocation: String,
      endLocation: String,
      timestamp: Date,
      fareAmount: Number,
    },
  ],
  authentication: {
    passwordHash: String,
    authToken: String,
  },
  profilePicture: {
    type: String,
  },
  paymentInformation: {
    bankAccount: String,
    paymentGatewayInfo: {
      gatewayName: String,
      accountNumber: String,
    },
  },
  driverStatus: {
    type: String,
    enum: ["online", "offline", "on-ride"],
    default: "offline",
  },
  driverPreferences: {
    notifications: {
      push: Boolean,
      email: Boolean,
    },
    language: String,
  },
});
const Driver = mongoose.model("Driver", driverSchema);
module.exports = Driver;