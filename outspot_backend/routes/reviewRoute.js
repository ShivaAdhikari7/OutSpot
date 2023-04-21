const express = require("express");
const router = new express.Router();

const { userGuard } = require("../auth/auth");

const { addReview } = require("../controller/reviewController");

router.route("/add").post(userGuard, addReview);

module.exports = router;
