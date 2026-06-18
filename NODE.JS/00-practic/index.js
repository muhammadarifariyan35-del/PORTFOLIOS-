const path = require("path");

const myPaht = "H:/PROGRAMMING/portfolio/NODE.JS/00-practic/script.js";

console.log(path.basename(myPaht));
console.log(path.dirname(myPaht));
console.log(path.extname(myPaht));
console.log(path.parse(myPaht));
console.log(path.resolve(myPaht));

console.log(path.basename(__filename));

//--------------------------------------------------------

const os = require("os");

console.log(os.platform());
console.log(os.homedir());
console.log(os.freemem());
console.log(os.cpus().length);

//--------------------------------------------------------

const fs = require("fs");

fs.writeFile("text.txt", "hello world", (err) => {
  if (err) throw err;
});
fs.appendFile(
  "text.txt",
  " i have a new phone my name is arif , ariyan ",
  (err) => {
    if (err) throw err;
  }
);
fs.readFile("text.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
fs.rename("text.txt", "note.text", (err) => {
  if (err) throw err;
});
fs.unlink("note.text", (err) => {
  if (err) throw err;
});

console.log("hello");

//-------------------------------------------------------------

const School = require("./script");

const school = new School;

// listener register
school.on("bellRing", ({ period, text }) => {
  console.log(`we need to run just now because ${period} ${text}`);
});

// event emit
setTimeout(() => {
  school.emit("bellRing", {
    period: "first",
    text: "period ended",
  });
}, 3000);

school.startPeriod();
