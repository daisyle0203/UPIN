const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
  company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now },
  interviewExperience: String,
  companyCulture: String,
  interviewer: String,
  overallExperience: Number,
})

module.exports = mongoose.model("Review", reviewSchema)
