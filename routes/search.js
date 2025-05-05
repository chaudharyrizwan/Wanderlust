const express = require('express');
const router = express.Router();
const Listing = require('../models/listing');

// ✅ 1. LIVE SEARCH API (used by frontend fetch)
router.get('/api/search', async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.json({ results: [] });
  }

  try {
    const regex = new RegExp(query, 'i');
    const results = await Listing.find({
      $or: [
        { title: regex },
        { location: regex },
        { country: regex },
        { description: regex }
      ]
    }).limit(10);
    res.json({ results });
  } catch (err) {
    console.error("Search error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ 2. FULL PAGE SEARCH (EJS render after form submit)
router.get('/search', async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.redirect('/listings');
  }

  try {
    const regex = new RegExp(query, 'i');
    const listings = await Listing.find({
      $or: [
        { title: regex },
        { location: regex },
        { country: regex },
        { description: regex }
      ]
    });

    res.render('listings/searchResults', { listings, query });
  } catch (err) {
    console.error("Search page render error:", err);
    res.redirect('/listings');
  }
});

module.exports = router;
