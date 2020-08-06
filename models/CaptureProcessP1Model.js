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
  },

  exceptions:{
    type: String,
  },

  transactionVolume:{
    type: String,
  },

  AverageHandlingTime:{
    type: String,
  },

  TotalHeadcount:{
    type: String,
  },

  ProductiveFTEs:{
    type: String,
  },

  ShiftTimings:{
    type: String,
  },

  unstructuredData:{
    type: String,
  },

  listofNames:{
    type: String,
  },

  ProcessCount:{
    type: String,
  },

  NumberofScreens:{
    type: String,
  },

  HumanDecisionPoints:{
    type: String,
  },

  StandardInputTemplate:{
    type: String,
  },

  metrics:{
    type: String,
  },

  LevelofDocumentation:{
    type: String,
  },

  NatureofProcess:{
    type: String,
  },
  
  StructureofInputData:{
    type: String,
  },
  
  DocumentsProcessed:{
    type: String,
  },
  
  processInvolved:{
    type: String,
  },
  BusinessProcessChange:{
    type: String,
  },
  processSLA:{
    type: String,
  }
});

module.exports = CaptureProcessP1Model = mongoose.model("captureprocesspage1", CaptureProcessPage1Schema);
