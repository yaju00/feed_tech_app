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
  const dob = req.body.date;
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

router
  .route("/login")
  .post(async (req, res) => {
    const loginid = req.body.loginid;
    const password = req.body.password;
    // console.log(req.body);

    // let interUser1 = await User.findOne({ email: loginid });
    // let interUser2 = await User.findOne({ phone: loginid });
    const user = await User.findOne({ email: loginid });
    // console.log(user);
    if (user) {
      if (user.password === password) {
        res.status(201).send(user._id);
      } else {
        res.send("invalid password");
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
  })
  .get(async (req, res) => {
    const user = await UserSession.find();
    res.send(user);
  });

router.route("/dashboard/settings").patch(async (req, res) => {
  const password = req.body.password;
  const cpassword = req.body.cpassword;
  const phone = req.body.phone;
  const email = req.body.email;
  const preference = req.body.preference;
  const updateObject = req.body;
  if (cpassword === password) {
    await User.updateOne({ email: email }, { $set: updateObject });
    console.log(req.body);
  }

  res.send(`patch request is recieved`);
});

module.exports = router;
