// External imports
const express = require("express");
const router = express.Router();

// internal imports
const { getUsers } = require("../controller/usersController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");
const avatarUpload = require("../middleware/users/avatarUpload");
const {
  addUserValidator,
  addUserValidationHnadler,
} = require("../middleware/users/userValidators");

// loogin page
router.get("/", decorateHtmlResponse("Users"), getUsers);

// add users
router.post("/", avatarUpload, addUserValidator, addUserValidationHnadler);

module.exports = router;
