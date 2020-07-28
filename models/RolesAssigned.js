const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RolesAssignedSchema = new Schema({
  emailid: {
    type: String,
    // required: true
  },
  roleid: {
    type: String,
    // required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = RoleAssign = mongoose.model("rolesassign", RolesAssignedSchema);
