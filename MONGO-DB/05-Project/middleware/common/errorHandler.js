const createError = require("http-errors");

// 404 not found handler
function notFoundHandler(req, res, next) {
  next(createError(404, "your requested content was not found!"));
}

// default Error handler
function errorHandler(err, req, res, next) {
  res.locals.error =
    process.env.NODE_ENV === "development"
      ? err
      : {
          message: err.message,
        };

  res.status(err.status || 500);
  if (res.locals.html) {
    // HTML responce
    res.render("error", {
      title: "error page",
    });
  } else {
    // JSON responce
    res.json(res.locals.error);
  }
}

module.exports = {
  notFoundHandler,
  errorHandler,
};
