const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CaptureProcessPage1Schema = new Schema({
  clientName: {
    type: String,
  },

  businessUnit: {
    type: String,
  },

  subBusinessUnit: {
    type: String,
  },

  processName: {
    type: String,
  },

  processDescription: {
    type: String,
  },

  list: {
    type: String,
  }

});

module.exports = CaptureProcessP1Model = mongoose.model("captureprocesspage1", CaptureProcessPage1Schema);
