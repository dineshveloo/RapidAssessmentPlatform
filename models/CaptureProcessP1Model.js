const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CaptureProcessPage1Schema = new Schema({
  clientName: {
    type: String,
    // required: true
  },
  industry: {
    type: String,
    // required: true
  },
  businessUnit: {
    type: String,
    // required: true
  },
  subBusinessUnit: {
    type: String,
    
  },
  processName: {
    type: String,
    
  },
  processId: {
    type: String,
    unique: true,
  },
  processDescription: {
    type: String,
  }

});

module.exports = CaptureProcessP1Model = mongoose.model("captureprocesspage1", CaptureProcessPage1Schema);
