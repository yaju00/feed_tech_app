const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

let Feed = require("./newfeed.modal");

router.route("/dashboard/create").post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const category = req.body.category;
  const body = req.body.body;
  console.log(req.body);
  const newFeed = new Feed({
    title,
    description,
    category,
    body,
  });

  newFeed
    .save()
    .then((result) => result)
    .catch((err) => err);
  console.log(newFeed);

  res.send(`feed save request is recieved`);
});

router.route("/dashboard/list").get(async (req, res) => {
  const list = await Feed.find()
    .then((res) => res)
    .catch((err) => err);
  res.send(list);
});

module.exports = router;
