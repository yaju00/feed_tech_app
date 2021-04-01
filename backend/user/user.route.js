const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

let User = require("./newuser.modal");
let UserSession = require("./usersession.model");
const { findOne } = require("./newuser.modal");

router.route("/signup").post((req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const password = req.body.password;
  const cpassword = req.body.cpassword;
  const dob = req.body.dob;
  const phone = req.body.phone;
  const preference = req.body.preference;
  console.log(req.body);
  const newUser = new User({
    fname,
    lname,
    email,
    password,
    cpassword,
    dob,
    phone,
    preference,
  });

  if (password === cpassword) {
    newUser
      .save()
      .then(() => {
        res.status(201).send("user added successfully");
      })
      .catch((err) => {
        res.send(`error is ${err}`);
      });
  } else {
    res.send("Password does not match. Try Again!");
  }
  console.log(newUser);
});

router.route("/login").post(async (req, res) => {
  const loginid = req.body.loginid;
  const password = req.body.password;
  console.log(req.body);

  // let interUser1 = await User.findOne({ email: loginid });
  // let interUser2 = await User.findOne({ phone: loginid });
  const user = await User.findOne({ email: loginid });
  console.log(user);
  if (user) {
    if (user.password === password) {
      res
        .status(201)
        .send(`logged in successfully and user doc is  ${user._id}`);
    } else {
      res.send("invalid password ");
    }
  } else {
    res.json("user does not exist! please register yourself");
  }

  const userid = user._id;
  const newSession = new UserSession({
    userid,
  });
  await newSession
    .save()
    .then((result) => res.send(result))
    .catch((err) => err);
});

router.route("/login").get(async (req, res) => {
  res.send("get request recieved");
  loginid = req.body.loginid;
  const user = await User.findOne({ email: loginid });
  console.log(user._id);
});

module.exports = router;
