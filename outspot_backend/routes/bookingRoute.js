const express = require("express");
const router = new express.Router();

const { userGuard } = require("../auth/auth");

const { bookSpot } = require("../controller/bookingController");

router.route("/").post(userGuard, bookSpot);

module.exports = router;
