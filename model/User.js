// require mongoose
const mongoose = require('mongoose');

// create Schema

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    phoneNumber: Number,
    email: String
});

// create the model

const userModel = mongoose.model("user", userSchema);

module.exports = model;
