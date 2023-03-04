const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  rate: {
    type: Number,
    required: true,
  },
});

const Feedback = mongoose.model("Feedbacks", FeedbackSchema);

module.exports = {Feedback}