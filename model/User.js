const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        
        trim: true,
    },
    email: {
        type: String,
       
        trim: true,
    },
    contact : {
        type: String,
       
        trim: true,
    },
    password:{
        type: String,
       
        trim: true,
    }
  
});

module.exports = mongoose.model("User", userSchema);