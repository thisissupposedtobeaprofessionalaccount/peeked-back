const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(
  cors({
    origin: true,
  })
);

app.use(express.json());

app.use("/", require("./routes/image_routes"));

module.exports = app;
