const mongoose = require('mongoose');

const guitarSchema = mongoose.Schema({
  image: String,
  brand: String,
  model: String,
  shape: String,
  specs: {
    colour: String, body: String, top: String, neck: String, fretboard: String, pickups: String
  },
  strings: Number
});

module.exports = mongoose.model('Guitar', guitarSchema);
