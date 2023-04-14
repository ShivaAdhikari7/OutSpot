const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(cors());

require("./database/connection");

app.use("/images", express.static(path.join(__dirname, "/images")));

app.use("/users", require("./routes/userRoute"));

const port = process.env.PORT || 90;
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
