const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is my Home page");
});

app.post("/", (req, res) => {
  res.send(" This is my post home page ");
});

app.listen(9000, () => {
  console.log("listening on port 9000");
});
