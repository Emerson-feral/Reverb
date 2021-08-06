const mongoose = require('mongoose');

const guitarSchema = mongoose.Schema({
  image: String,
  brand: String,
  model: String,
  strings: Number,
  price: Number
});

module.exports = mongoose.model('Guitar', guitarSchema);
