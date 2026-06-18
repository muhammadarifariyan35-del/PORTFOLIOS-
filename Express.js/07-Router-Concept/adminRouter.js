const express = require("express");
const adminRouter = express.Router();

adminRouter.get("/", (req, res) => {
  res.send("dashbord");
  console.log("dashbord");
});

adminRouter.get("/login", (req, res) => {
  res.send("login");
  console.log("login");
});

module.exports = adminRouter;
