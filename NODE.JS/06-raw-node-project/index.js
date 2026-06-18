/*
 * Title: Uptime Monitoring Aplication
 * Description: A RESTFul API to monitor up or down time of user deind links
 * Author: Arif Ariyan
 * Date: 06/01/2026
 
*/

// Dependencies
const http = require("http");
const { handlerReqRes } = require("./helpers/handleReqRes");
const enbironment = require("./helpers/environments");
const data = require("./lib/data");
//?---------------
// data.create(
//   "test",
//   "ode dFile",
//   { name: "bangladesh", language: "bangla" },
//   (err) => {
//     console.log("error was", err);
//   }
// );
//?--------------
// data.read("test", "ode dFile", (err, data) => {
//   console.log(data);
// });
//?--------------

// data.update(
//   "test",
//   "File",
//   { name: "England", language: "English" },
//   (err) => {
//     console.log(err);
//   }
// );
//?-------------
// data.delete("test", "File", (err) => {
//   console.log(err);
// });

// module scaffolding
const app = {};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleRequest);
  server.listen(enbironment.port, () => {
    console.log(`listening to port number ${enbironment.port}`);
  });
};

// handle Request Response
app.handleRequest = handlerReqRes;

// start the server
app.createServer();
