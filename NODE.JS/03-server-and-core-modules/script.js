//!-------path--------------------
// const path = require("path");
// const myPath =
//   "H:PROGRAMMINGportfolioNODE.JS/03-server-and-core-modulesindex.js";

// console.log(path.basename(myPath));
// console.log(path.dirname(myPath));
// console.log(path.extname(myPath));
// console.log(path.parse(myPath));

//!--------os-------------------------

// const os = require("os");
// console.log(os.platform());
// console.log(os.homedir());
// console.log(os.freemem());
// console.log(os.cpus().length);

//!----------fs-----------------------

// const fs = require("fs");
// fs.writeFileSync(
//   "myfile.txt",
//   "hello programmars, my name is arif ariyan i have a new book"
// );

// fs.("myfile.txt", "i will ", (err) => {
//   console.log(err);
// });

// fs.readFile("myfile.txt", (err, data) => {
//   if (err) return console.log(err);
//   console.log(data.toString());
// });

// console.log("hello");

//!----------events--------------------

//? const EventEmitter = require("events");
//? const emitter = new EventEmitter();

// const school = require("./index");
// const School = new school();

//* register a listener for bellRing event
// setTimeout(() => {
//   School.emit("bellRing", {
//     period: "frist",
//     text: "period ended",
//   });
// }, 3000);

// School.startPeriod();

//!------http--------------------------

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("hello programmars");
//     res.write(" hello world");
//     res.end();
//   } else if (req.url === "/about") {
//     res.write("Hello Mini");
//     res.end();
//   }else{
//     res.write('Not Found')
//     res.end()
//   }
// });

// server.listen(9000);

// console.log("hello");
