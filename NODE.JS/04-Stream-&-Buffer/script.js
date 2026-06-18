// const fs = require("fs");

// const outReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, );

// outReadStream.on("data", (chunk) => {
//   console.log(chunk.toString());
// });
// outReadStream.on("end", () => {
//   console.log('finished');
// });

//!------------example---------------------------

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   // header বলছি, আমি text পাঠাচ্ছি
//   res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });

//   // file কে stream বানালাম
//   const readStream = fs.createReadStream("bigData.txt", {
//     encoding: "utf8",
//     highWaterMark: 256, // প্রতি chunk 32 byte
//   });

//   // যখন chunk আসবে
//   readStream.on("data", (chunk) => {
//     console.log("CHUNK RECEIVED:");
//     console.log(chunk);
//     res.write(chunk); // browser এ পাঠাচ্ছি
//   });

//   // file শেষ হলে
//   readStream.on("end", () => {
//     res.end("\n\n--- File Finished ---");
//   });

//   // error handle
//   readStream.on("error", (err) => {
//     res.end("Error reading file");
//   });
// });

// server.listen(9000, () => {
//   console.log("Server running on http://localhost:3000");
// });

//!-------write stream-------------------------

// const fs = require("fs");
// const ourReadStreams = fs.createReadStream(`${__dirname}/bigData.txt`);
// const ourWriteStreams = fs.createWriteStream(`${__dirname}/smallData.txt`);

// ourReadStreams.on("data", (chunk) => {
//   ourWriteStreams.write(chunk);
// });

//!--------pipe stream--------------------------

// const fs = require("fs");
// const ourReadStreams = fs.createReadStream(`${__dirname}/bigData.txt`);
// const ourWriteStreams = fs.createWriteStream(`${__dirname}/smallData.txt`);

// ourReadStreams.pipe(ourWriteStreams)

//!----revetion example-------------------------

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const myReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, {
    encoding: "utf8"
  });
  myReadStream.pipe(res);
});
server.listen(8000);
console.log("listening on port 3000");
