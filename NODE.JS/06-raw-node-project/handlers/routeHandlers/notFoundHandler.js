/*
 * Title: not found handler
 * Description: 404 not found handler
 * Author: Arif Ariyan
 * Date: 07/01/2026
 */

//module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  callback(404, {
    message: "your request was no found",
  });
};

module.exports = handler;
