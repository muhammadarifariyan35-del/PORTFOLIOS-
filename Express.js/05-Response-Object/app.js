const express = require("ejs");
const express = require("express");
const app = express();
const PORT = 9000;
app.set("view engine", "ejs");

// app.get("/about", (req, res) => {
// res.send("Abot page");
// res.end();
// res.json({
//   "ব্যবহারকীর নাম" : " আরিফ আরিয়ান ",
//   Country: " বাংলাদেশ। ",
// });
// res.status(404).end();
//   res.sendStatus(403);
// });
//?---------------------------------------------
// app.get("/about", (req, res) => {
//   res.format({
//     "text/plain": () => {
//       res.send("Hi");
//     },
//     "text/html": () => {
//       res.render("pages/about", {
//         name: "arif ariyan",
//         country: "Bangladesh",
//       });
//     },
//     "application/json": () => {
//       res.json({
//         massage: "about",
//       });
//     },
//     default: () => {
//       res.status(406).send("Not Acceptable");
//     },
//   });
// });
//?-------------------------------------------

app.get("/test", (req, res) => {
  res.send("Hello MINI");
});

app.get("/about", (req, res) => {
  // res.cookie("name", "learnt with arif");
  // res.cookie("country", "Bangladesh")
  // res.end();
  //?----------
  // res.location("/test");
  //?----
  // res.redirect("/test");
  //?-----
  res.set("platform", "Learn With Arif Ariyan");
  res.get("platform");
  res.end();
});

app.listen(PORT, () => {
  console.log(`${PORT} listening`);
});
