const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CompanyAssignSchema = new Schema({
  email: {
    type: String,
    // required: true
  },
  comapany_code: {
    type: String,
    // required: true
  },
//   date: {
//     type: Date,
//     default: Date.now
//   },
});

module.exports = CompanyAssign = mongoose.model("companyassign", CompanyAssignSchema);
