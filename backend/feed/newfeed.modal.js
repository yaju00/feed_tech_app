const mongoose = require("mongoose");

const newFeedSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    category: {
      type: Array,
    },
    description: {
      type: String,
    },
    body: {
      type: String,
    },
  },
  { timestamps: true }
);

const Feed = mongoose.model("Feed", newFeedSchema);

module.exports = Feed;
