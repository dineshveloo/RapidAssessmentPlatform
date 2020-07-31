const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    // required: true
  },
  email: {
    type: String,
    // required: true
  },
  password: {
    type: String,
    // required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  //flag for approving email set to 0/ 1
  confirmed: {
    type: Boolean,
    default: false
  },
  company: {
    type: String,
  },
  version: false
});

module.exports = User = mongoose.model("users", UserSchema);
