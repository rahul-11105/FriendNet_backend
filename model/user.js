const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    Name:{
        type:String,
    },
    Email:{
        type:String,
    }
});

const user = mongoose.model("user",userSchema);

module.exports = user;