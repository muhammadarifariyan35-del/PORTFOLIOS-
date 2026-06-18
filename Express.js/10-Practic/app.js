const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/user", (req, res) => {
  res.set("new", "foolder");
  console.log(res.get("new"));
  res.end();
});

app.listen(9000, () => {
  console.log(`Listening on port 9000`);
});
 