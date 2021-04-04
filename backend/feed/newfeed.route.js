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

router.route("/dashboard/update/:id").patch(async (req, res) => {
  const id = req.params.id;
  const updateObject = req.body;

  await Feed.findByIdAndUpdate(id, updateObject).catch((err) =>
    console.log(err)
  );
  console.log(req.body, id);

  res.send(`patch request for article is recieved`);
});

router.route("/dashboard/:id").get(async (req, res) => {
  let id = req.params.id;
  const feed = await Feed.findById({ _id: id }).catch((err) =>
    console.log(err)
  );
  res.send(feed);
});

module.exports = router;
