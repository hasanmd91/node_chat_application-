const createError = require("http-errors");

// 404 not found handeler

function notfoundHandeler(req, res, next) {
  next(createError(404, "your requested content was not found"));
}

// default error handeler

function errorHandelr(err, req, res, next) {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };
  res.status(err.status || 500);

  if (res.locals.html) {
    //html response
    res.render("error", {
      title: "error page",
    });
  } else {
    //json response
    res.json(res.locals.error);
  }
}

module.exports = { notfoundHandeler, errorHandelr };
