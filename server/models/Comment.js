const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
  review: { type: mongoose.Schema.Types.ObjectId, ref: "Review" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now },
})

module.exports = mongoose.model("Comment", commentSchema)
