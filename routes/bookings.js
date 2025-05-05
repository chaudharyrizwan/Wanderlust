const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');
const Listing = require('../models/listing');
const { isLoggedIn } = require('../middleware');

router.post('/:id/book', isLoggedIn, async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  const { checkIn, checkOut, guests } = req.body;

  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
  const basePrice = listing.price * nights;
  const gst = Math.round(basePrice * 0.18);
  const totalPrice = basePrice + gst;

  const booking = new Booking({
    listing,
    user: req.user._id,
    checkIn: checkInDate,
    checkOut: checkOutDate,
    guests,
    totalPrice,
    gst
  });

  await booking.save();
  req.flash("success", "Your booking was successful!");
  res.redirect(`/listings/${listing._id}`);
});

module.exports = router;
