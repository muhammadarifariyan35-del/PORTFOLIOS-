/*
 * Title: Routes
 * Description: Application Routes
 * Author: Arif Ariyan
 * Date: 07/01/2026
 */

//Dependencies
const { sampleHandler } = require("./handlers/routeHandlers/sampleHandler");
const { userHandler} = require("./handlers/routeHandlers/userHandler");

const routes = {
  sample: sampleHandler,
  user: userHandler,
};

module.exports = routes;
