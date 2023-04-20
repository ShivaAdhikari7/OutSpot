const Booking = require("../models/bookingModel");
const Spot = require("../models/spotModel");

const bookSpot = async (req, res) => {
  try {
    console.log(req.user.id);
    const userId = req.user.id;
    const { date, spotId } = req.body;

    if (!userId) throw new Error("User not authorized");
    if (!spotId) throw new Error("No any spot chosen for booking");

    const spotData = await Spot.find({ _id: spotId });

    await Spot.updateOne(
      { _id: spotId },
      { availableSpotNo: spotData[0].availableSpotNo - 1 },
      { new: true }
    );
    const bookingData = await Booking.create({
      userId,
      spotId,
      date,
      spotData: spotData[0],
    });
    if (bookingData) return res.json({ bookingData });
    else throw new Error("Problem while creating booking data");
  } catch (err) {
    res.json({ errorMessage: err.message });
  }
};

const getBookings = async (req, res) => {
  try {
    const userId = req.user._id;
    if (!userId) throw new Error("User not authorized");
  } catch (err) {
    res.json({ errorMessage: err.message });
  }
};
module.exports = { bookSpot };
