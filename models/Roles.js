const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RoleSchema = new Schema({
  role_name: {
    type: String,
    // required: true
  },
  role_code: {
    type: String,
    // required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = Role = mongoose.model("roles", RoleSchema);
