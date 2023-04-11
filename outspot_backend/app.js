const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

require("./database/connection");

const port = process.env.PORT || 90;
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
