const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const admin = express();
app.use(express.json());
app.use(cookieParser());
const PORT = 5;
const handler = require("./handler");
app.use("/admin", admin);

admin.get("/setting", (req, res) => {
  res.send("hello");
  c;
});

app.get("/setting", handler);

app.listen(PORT, () => {
  console.log(`${PORT} listening`);
});
