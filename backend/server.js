"use strict";
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("we are connected");
  })
  .catch((err) => console.log(err));

const UserRouter = require("./user/user.route");
app.use("/", UserRouter);
const FeedRouter = require("./feed/newfeed.route");
app.use("/", FeedRouter);

app.listen(port, () => {
  console.log(`this application is running on ${port} port`);
});
