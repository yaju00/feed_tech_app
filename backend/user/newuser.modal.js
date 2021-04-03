const mongoose = require("mongoose");

const newUserSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      trim: true,
    },
    lname: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    cpassword: {
      type: String,
    },
    dob: {
      type: Date,
    },
    phone: {
      type: String,
    },
    preference: {
      type: Array,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", newUserSchema);

module.exports = User;
