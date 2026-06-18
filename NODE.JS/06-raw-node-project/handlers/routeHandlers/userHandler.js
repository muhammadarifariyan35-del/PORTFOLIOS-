/*
 * Title: User handler
 * Description: handler to handle user related routes
 * Author: Arif Ariyan
 * Date: 12/01/2026
 */

//module scaffolding
const handler = {};

handler.userHandler = (requestProperties, callback) => {

  callback(200, {
    message: 'this is a user url'
  })
};

module.exports = handler;

