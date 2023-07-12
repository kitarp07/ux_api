const mongoose = require('mongoose');

const accommodationSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    trim: true
  },
  checkInDate: {
    type: String,
    trim: true
  },
  checkOutDate: {
    type: String,
    trim: true
  },
  numberOfGuests: {
    type: Number,
    trim: true
  },
  price: {
    type: Number,
    trim: true
  },
  img: {
      type: [String]
  
    }
});


module.exports = mongoose.model("Accommodation", accommodationSchema);