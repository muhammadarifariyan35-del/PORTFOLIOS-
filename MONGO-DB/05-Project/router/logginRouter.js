// External imports
const express = require("express");
const router = express.Router();

// internal imports
const { getLoggin } = require("../controller/logginController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");

// loogin page
router.get("/", decorateHtmlResponse("Login"), getLoggin);

module.exports = router;
