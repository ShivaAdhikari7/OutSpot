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
module.exports = { addReview };
