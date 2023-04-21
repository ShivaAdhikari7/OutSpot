const Review = require("../models/reviewModel");
const User = require("../models/userModel");

const addReview = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      res.status(400);
      throw new Error("User not authorized");
    }

    const { text, spotId } = req.body;
    if (!spotId) {
      res.status(400);
      throw new Error("No any spot.");
    }
    if (!text) {
      res.status(400);
      throw new Error("Please fill all the fields");
    }
    const { firstName, lastName } = await User.findById(user.id);

    const reviewData = await Review.create({
      text,
      reviewDate: new Date().toISOString(),
      userId: user.id,
      spotId,
      userFullName: `${firstName} ${lastName}`,
    });
    res.json({ reviewData });
  } catch (err) {
    res.json({ message: err.message });
  }
};
const getAllReviews = async () => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(200);
      throw new Error("No any spot.");
    }

    const reviews = await Review.find({ spotId: id });
    if (!reviews) throw new Error("Error while getting reviews");

    res.send({ reviewData: reviews });
  } catch (err) {
    res.json({ errorMessage: err.message });
  }
};
const getReviewUser = async () => {
  try {
  } catch (err) {
    res.json({ errorMessage: err.message });
  }
};
const updateReview = async () => {
  try {
  } catch (err) {
    res.json({ errorMessage: err.message });
  }
};
const deleteReview = async () => {
  try {
  } catch (err) {
    res.json({ errorMessage: err.message });
  }
};
module.exports = {
  addReview,
  getAllReviews,
  getReviewUser,
  updateReview,
  deleteReview,
};
