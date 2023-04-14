const multer = require("multer");

const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync(floderPath)) {
      fs.mkdirSync(floderPath);
    }
    cb(null, "./images");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now().toString() + file.originalname);
  },
});

const filter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/gif"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  fileFilter: filter,
});

module.exports = upload;
