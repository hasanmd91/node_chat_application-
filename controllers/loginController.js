function getLogin(req, res, next) {
  res.render("index", {
    title: "Login Chat-application by Hasan ",
  });
}

module.exports = { getLogin };
