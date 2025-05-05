const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  listing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Listing',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  checkIn: Date,
  checkOut: Date,
  guests: Number,
  totalPrice: Number,
  gst: Number,
});

module.exports = mongoose.model('Booking', bookingSchema);