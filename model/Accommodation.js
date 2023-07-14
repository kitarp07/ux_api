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

  description: {
    type: String,
    trim: true

  },

  info: {
    type: String,
    trim: true

  },

  info_2: {
    type: String,
    trim: true

  },
  info_3: {
    type: String,
    trim: true

  },
  info_4: {
    type: String,
    trim: true

  },
  info_5: {
    type: String,
    trim: true

  },

  offer_1:{
    type: String,
    trim: true,
  },
  offer_2:{
    type: String,
    trim: true,
  },
  offer_3:{
    type: String,
    trim: true,
  },
  offer_4:{
    type: String,
    trim: true,
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