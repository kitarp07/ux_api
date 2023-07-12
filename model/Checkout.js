const mongoose = require("mongoose");
// Define the Checkout schema
const checkoutSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
   
    },
    trip: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Trip',
      
    },
    numTravelers: {
      type: Number,
    
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

module.exports = mongoose.model("Checkout", checkoutSchema);
