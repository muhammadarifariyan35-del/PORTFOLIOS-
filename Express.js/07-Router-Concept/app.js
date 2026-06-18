const express = require("express");
const app = express();
const adminRouter = require("./adminRouter");
const publicRouter = require("./publicRouter");
const port = 9000;

//?+++++++++++++++++
// const log = (req, res, next) => {
//   console.log("i am logging something");
//   next();
// };
// app.use(log);
//?=================

app.use("/admin", adminRouter);
app.use("/", publicRouter);

app.listen(port, () => {
  console.log(` LIstenign on port ${port}`);
});
