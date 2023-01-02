function getLogin(req, res, next) {
  res.render("index", {
    title: " LOGIN- chat application",
  });
}

module.exports = { getLogin };
