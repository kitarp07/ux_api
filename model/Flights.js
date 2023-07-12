const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        
        trim: true,
    },
    departure_time: {
        type: String,
        trim: true,
    },
    arrival_time : {
        type: String,
        trim: true,
    },
    origin:{
        type: String,
        trim: true,
    },
    destination:{
        type: String,
        trim: true,
    },
    no_of_passengers:{
        type: Number,
    },
    price:{
        type: Number,
    },
    img: {
        type: [String]
    
      }

  
});

module.exports = mongoose.model("Flights", flightSchema);