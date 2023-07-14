const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  origin: {
    type: String,
    trim: true,
  },
  destination: {
    type: String,
    trim: true,
  },

  description: {
    type: String,
    trim: true,
  },
  itinerary:{
    type: String,
    trim: true,
  },
  itinerary_1:{
    type: String,
    trim: true,
  },
  itinerary_2:{
    type: String,
    trim: true,
  },
  itinerary_3:{
    type: String,
    trim: true,
  },
  itinerary_4:{
    type: String,
    trim: true,
  },
  itinerary_5:{
    type: String,
    trim: true,
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

  startDate: {
    type: String,
    trim: true,
  },
  endDate: {
    type: String,
    trim: true,
  },
  numberOfPassengers: {
    type: Number,
    trim: true,
  },
  price: {
    type: Number,
    trim: true,
  },
  img: {
    type: [String]

  }
});

module.exports = mongoose.model("Trips", tripSchema);
