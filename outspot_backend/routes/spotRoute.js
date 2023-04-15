const express = require("express");
const router = new express.Router();
const upload = require("../upload/ImageUpload");

const { userGuard } = require("../auth/auth");

const {
  addSpot,
  getSpot,
  getSpotSearch,
} = require("../controller/spotController");

router.route("/add").post(userGuard, upload.single("img"), addSpot);
router.get("/search/:name", getSpotSearch);
router.route(":/id").get(userGuard, getSpot);
