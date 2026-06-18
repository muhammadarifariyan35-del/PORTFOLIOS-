const express = require("express");
const app = express();
const PORT = 9000;
const adminRouter = express.Router();
const cookieParser = require("cookie-parser");

app.use(cookieParser());

const loggerWrapper = (options) => {
  return function (req, res, next) {
    if (options.log) {
      console.log(
        `${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${req.protocol} - ${req.ip}`,
      );
      next();
    } else {
      throw new Error("Faild to log");
    }
  };
};

adminRouter.use(loggerWrapper({ log: true }));

adminRouter.get("/dashbord", (req, res) => {
  res.send("dashbord");
  console.log("you are in dashbord");
});

app.use("/admin", adminRouter);

app.get("/about", (req, res) => {
  res.send("HOME PAGE");
  console.log("Home Page");
});

const errorMiddleware = (err, req, res, next) => {
  console.log(err.message);
  res.status(500).send("there was a server side error");
};

adminRouter.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`${PORT} is listening`);
});
