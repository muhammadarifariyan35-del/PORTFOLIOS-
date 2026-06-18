const express = require("express");
const app = express();
const port = 9000;
app.use(express.json());
const todoHandler = require("./routeHnadler/todoHandler");

//  the monggose brings from node_modules
const mongoose = require("mongoose");

// mongoose connnet with server by async
mongoose
  .connect("mongodb://localhost/todos")
  .then(() => {
    console.log("connect");
  })
  .catch((err) => console.log(err));

// use the dotohandler
app.use("/todo", todoHandler);

// Error handler function
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

// Error handler function use
app.use(errorHandler);

// app Listenign by port
app.listen(port, () => {
  console.log(`Listenign on port ${port}`);
});
