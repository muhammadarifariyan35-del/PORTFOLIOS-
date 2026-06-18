// const express = require("express");
// const app = express();
// const port = 9000;

// app.get("/", (req, res, next) => {
//   for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//       next("there was an error");
//     } else {
//       res.write("a");
//     }
//   }
//   res.end();
// });

// app.use((req, res, next) => {
// res.status(404).send("request URL was not found")
//   next("request URL was not found");
// });

// app.use((err, req, res, next) => {
//   if (res.headersSent) {
//     next("there was a problem!");
//   } else {
//     if (err.message) {
//       res.status(500).send(err.message);
//     } else {
//       res.status(500).send("There was a error");
//     }
//   }
// });

// app.listen(port, () => {
//   console.log(`Listening on potr ${port}`);
// });

//!----------async-------------------------------------

const express = require("express");
const app = express();
const port = 9000;
const fs = require("fs");

app.get("/", [
  (req, res, next) => {
    fs.readFile("/file-does-not-exist", "utf-8", (err, data) => {
      console.log(data);
      next(err);
    });
  },
  (req, res, next) => {
    console.log(data.property);
  },
]);

app.use((req, res, next) => {
  console.log("i am not called");
  next();
});

app.use((err, req, res, next) => {
  if (res.headersSent) {
    next("there was a problem!");
  } else {
    if (err.message) {
      res.status(500).send(err.message);
    } else {
      res.status(500).send("There was a error");
    }
  }
});

app.listen(port, () => {
  console.log(`Listening on potr ${port}`);
});
