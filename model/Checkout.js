const mongoose = require("mongoose");
// Define the Checkout schema
const checkoutSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
   
    },
    trip: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Trips',
      
    },
    flight: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Flights',
      
    },
    stay: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Accommodation',
      
    },
   
    street_address: {
      type: String,
      trim: true
    
    },
    street_address: {
      type: String,
      trim: true
    
    },
    apartment_number: {
      type: String,
      trim: true
    
    },
    state: {
      type: String,
      trim: true
    
    },
    zipcode: {
      type: String,
      trim: true
    
    },
    city: {
      type: String,
      trim: true
    
    },
    country: {
      type: String,
      trim: true
    
    },
    trip_type: {
      type: String,
      trim: true
    
    },
    price: {
      type: Number,
      trim: true
    
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

module.exports = mongoose.model("Checkout", checkoutSchema);
