const Spot = require("../models/spotModel");
const User = require("../models/userModel");

const capitalizeString = () => {
  if (str.includes("")) {
    return str
      .split(" ")
      .map((s) => {
        return s[0].toUpperCase() + s.substring(1);
      })
      .join(" ");
  }
  return str.split("")[0].toUpperCase() + str.subString(1);
};

const addSpot = async (req, res) => {
  const user = req.user;
  if (!user) {
    res.status(400);
    throw new Error("User not authorized");
  }

  const {
    name,
    address,
    availableSpotNo,
    type,
    latitude,
    longitude,
    email,
    phoneNo,
    price,
    description,
  } = req.body;

  const spotPresent = await Spot.findOne({ name });
  if (spotPresent) {
    res.status(400);
    throw new Error("Spot name already exists");
  }

  const imgFile = req.file;

  if (
    !name ||
    !address ||
    !availableSpotNo ||
    !type ||
    !latitude ||
    !longitude ||
    !email ||
    !phoneNo ||
    !price ||
    !description
  ) {
    res.status(400);
    throw new Error("Please fill all the files");
  }
  if (!imgFile) {
    res.send({ message: "Please upload image." });
  }
  if (imgFile) {
    let basePath;
    const fileName = imgFile.filename;

    if (req.get("host").includes("10.0.2.2")) {
      basePath = `${req.protocol}://${req
        .get("host")
        .replace("10.0.2.2", "localhost")}/images/`;
    } else {
      basePath = `${req.protocol}://${req.get("host")}/images/`;
    }

    imageURL = basePath + fileName;
  }

  const spotData = await Spot.create({
    name,
    address,
    availableSpotNo,
    type: capitalizeString(type),
    latitude,
    longitude,
    phoneNo,
    email,
    price,
    description,
    imageURL,
    userId: user._id,
  });

  if (spotData) {
    res.status(200);
    res.json({ message: "Spot created successfully" });
  } else {
    res.status(400);
    throw new Error("Invalid spot data");
  }
};
const getSpotSearch = async (req, res) => {
  try {
    const spotName = req.params.name;
    if (!spotName) {
      res.status(400);
      throw new Error("No spot name available");
    }
    const spotData = await Spot.find({
      $or: [{ name: { $regex: capitalizeString(spotName) } }],
    }).select("-userId");

    res.json({ spotData });
  } catch (err) {
    res.json({ statusCode: 404, message: err.message });
  }
};

const getSpot = async (req, res) => {
  try {
    const id = req.params.id;
    const spotData = await Spot.findById(id);
    const { firstName, lastName } = await User.findById(spotData.userId);
    const data = {
      ...spotData._doc,
      authorName: `${firstName} ${lastName}`,
    };
    res.json({ spotData: data });
  } catch (err) {
    res.json({ statusCode: 404, message: err.message });
  }
};
module.exports = {
  addSpot,
  getSpot,
  getSpotSearch,
};
