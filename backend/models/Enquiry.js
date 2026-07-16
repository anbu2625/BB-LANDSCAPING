const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  email: {
    type: String
  },

  location: {
    type: String
  },

  service: {
    type: String
  },

  description: {
    type: String
  },

  status: {
    type: String,
    enum: ["New", "Contacted", "Completed"],
    default: "New"
  }
},
{
  timestamps: true
});

module.exports = mongoose.model(
  "Enquiry",
  enquirySchema
);