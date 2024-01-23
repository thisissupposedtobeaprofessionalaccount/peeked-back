const fs = require("fs");
const path = require("path");

//return the name of the n most recent files
exports.getRecent = async (req, res, next) => {
  try {
    const { n } = req.query;
    if (n == undefined) {
      return res.status(400).send();
    }

    //files in gallery must be sorted in ascending order
    const imageNames = fs
      .readdirSync(path.join(__dirname, "../../gallery"))
      .slice(-n)
      .reverse();

    return res.status(200).send(imageNames);
  } catch (err) {
    return res.status(500).send();
  }
};

exports.getGallery = async (req, res, next) => {
  try {
    //files in gallery must be sorted in ascending order
    const imageNames = fs
      .readdirSync(path.join(__dirname, "../../gallery"))
      .reverse();

    return res.status(200).send(imageNames);
  } catch (err) {
    return res.status(500).send();
  }
};

exports.uploadImage = async (req, res) => {
  try {
    return res.status(201).send("File uploaded succesfully");
  } catch (err) {
    return res.status(503).send();
  }
};
