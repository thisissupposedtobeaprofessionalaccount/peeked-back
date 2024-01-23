const express = require("express");
const router = express.Router();
const path = require("path");

const {
  getRecent,
  getGallery,
  uploadImage,
} = require("../controllers/image_controller");

const multerImageUploadMiddleWare = require("../middlewares/image_upload_middleware");
const { tokenValidatorMiddleware } = require("../middlewares/api_token_check");

//access to the gallery, every image in this folder is public
router.use(
  "/gallery",
  express.static(path.normalize(__dirname + "/../../gallery"))
);

//get the n most recent images
router.route("/recent").get(getRecent);

router.route("/gallery").get(getGallery);

//post an image
router
  .route("/upload")
  .post(
    tokenValidatorMiddleware,
    multerImageUploadMiddleWare.single("img"),
    uploadImage
  );

module.exports = router;
