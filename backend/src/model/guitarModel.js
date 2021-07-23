const mongoose = require('mongoose');

const guitarSchema = mongoose.Schema({
  image: String,
  brand: String,
  model: String,
  strings: String,
  price: Number
});

module.exports = mongoose.model('Guitars', guitarSchema);
