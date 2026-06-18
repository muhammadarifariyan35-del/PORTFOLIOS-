const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Import todo schema
const userSchema = require("../schemas/userSchema");

// Making  module
const User = mongoose.model("User", userSchema);

//Sign up
router.post("/signup", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const signUp = new User({
      name: req.body.name,
      username: req.body.username,
      password: hashedPassword,
    });
    await signUp.save();
    console.log(signUp);

    res.status(200).json({
      message: "Sighup was successfully!",
      Data: signUp,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      Error: "signup failed",
      details: err.message,
    });
  }
});

// LOGIN
router.post("/loggin", async (req, res) => {
  try {
    const user = await User.find({ username: req.body.username });
    if (user && user.length > 0) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user[0].password,
      );
      if (isValidPassword) {
        // ganarate token
        const token = jwt.sign(
          {
            username: user[0].username,
            userId: user[0]._id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          },
        );

        res.status(200).json({
          access_token: token,
          message: "loggin successfully",
        });
      } else {
        res.status(401).json({
          Error: "Authentication failed",
        });
      }
    } else {
      res.status(401).json({
        Error: "Authentication failed",
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      Error: "there was a server side Error",
      Details: err.message,
    });
  }
});

// Get all Users
router.get("/all", async (req, res) => {
  try {
    const users = await User.find({
      $or: [{ username: "jui" }, { username: "jim" }],
    }).populate("todos");

    res.status(200).json({
      massage: "successful",
      data: users,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      massage: "there was a server side Error",
    });
  }
});

module.exports = router;
