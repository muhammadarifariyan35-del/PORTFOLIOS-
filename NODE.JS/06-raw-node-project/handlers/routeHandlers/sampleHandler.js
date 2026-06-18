/*
 * Title: sample handler
 * Description: sample handler
 * Author: Arif Ariyan
 * Date: 07/01/2026
 */

//module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
  console.log(requestProperties);
  callback(200, {
    message: 'this is a sample url'
  })
};

module.exports = handler;

