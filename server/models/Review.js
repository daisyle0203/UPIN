const mongoose = require("mongoose")
const dateFormat = require("../utils/dateFormat")

const reviewSchema = new mongoose.Schema({
  interviewExperience: {
    type: String,
    required: "You need to leave a review!",
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  reviewAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  role: String,
  interviewerInfo: String,
  overallExperience: Number,
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
   company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
})

module.exports = mongoose.model("Review", reviewSchema)
