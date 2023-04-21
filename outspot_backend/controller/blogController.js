const Blog = require("../models/blogModel");

const User = require("../models/userModel");

const addBlog = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      res.status(400);
      throw new Error("User not authorized");
    }
    const { title, subtitle, description } = req.body;
    const { firstName, lastName } = await User.findById(user._id);

    const imgFile = req.file;
    if (!title || !description || !subtitle) {
      res.status(400);
      throw new Error("Please fill the required fields");
    }
    if (!imgFile) {
      res.send({ message: "Please upload image" });
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

    const blogData = await Blog.create({
      title,
      description,
      writtenDate: new Date().toISOString(),
      subtitle,
      imageURL,
      authorName: `${firstName} ${lastName}`,
      userId: req.user.id,
    });
    if (blogData) {
      res.status(200);
      res.json({ message: "Blog added successfully" });
    } else {
      res.status(400);
      throw new Error("Invalid blog data");
    }
  } catch (err) {
    res.json({ errorMessage: err.message });
  }
};
const getBlog = async (req, res) => {
  try {
  } catch (err) {
    res.json({ errorMessage: err.message });
  }
};
const getAllBlogs = async (req, res) => {
  try {
  } catch (err) {
    res.json({ errorMessage: err.message });
  }
};
const getBlogUser = async (req, res) => {
  try {
  } catch (err) {
    res.json({ errorMessage: err.message });
  }
};
const updateBlog = async (req, res) => {
  try {
  } catch (err) {
    res.json({ errorMessage: err.message });
  }
};
const deleteBlog = async (req, res) => {
  try {
  } catch (err) {
    res.json({ errorMessage: err.message });
  }
};

module.exports = {
  addBlog,
  getAllBlogs,
  getBlog,
  getBlogUser,
  updateBlog,
  deleteBlog,
};
