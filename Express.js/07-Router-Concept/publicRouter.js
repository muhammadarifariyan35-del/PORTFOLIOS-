const express = require("express");
const publicRouter = express.Router();

//?++++++++++++++++++++++
// const log = (req, res, next) => {
//   console.log("i am logging something");
//   next();
// };
// publicRouter.use(log);
//?======================

// publicRouter.param("user", (req, res, next, id) => {
//   req.user = id === "1" ? "admin" : "anonymous";
//   console.log("i am called once");
//   next();
// });
//?======================

// const param = (id) => {
//   return (req, res, next) => {
//     if (req.params.user === id) {
//       next();
//     } else {
//       res.status(403).send("access Denied!");
//     }
//   };
// };

// ?====================

// publicRouter.param('user', "12")

publicRouter.get("/:user",(req, res) => {
  res.send("HOME");
  console.log("Home");
});

// publicRouter
//   .route("/user")
//   .all((req, res, next) => {
//     console.log("I am logging something");
//     next();
//   })
//   .get((req, res) => {
//     res.send("Get");
//     console.log("get");
//   })
//   .post((req, res) => {
//     res.send("POST");
//     console.log("post");
//   })
//   .put((req, res) => {
//     res.send("put");
//     console.log("put");
//   })
//   .delete((req, res) => {
//     res.send("delete");
//     console.log("delete");
//   });

publicRouter.get("/about", (req, res) => {
  res.send("about");
  console.log("about");
});

module.exports = publicRouter;
