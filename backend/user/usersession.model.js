const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const newUserSession = new mongoose.Schema({
  userid: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
});

const UserSession = mongoose.model("UserSession", newUserSession);

module.exports = UserSession;
