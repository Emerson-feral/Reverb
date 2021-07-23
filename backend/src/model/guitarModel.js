const mongoose = require('mongoose');

const guitarSchema = mongoose.Schema({
  brand: String,
  model: String,
  strings: String,
  price: Number
});

module.exports = mongoose.model('Guitars', guitarSchema);
