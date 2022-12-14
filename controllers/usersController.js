function getUsers(req, res, next) {
  res.render("users", {
    title: "Users-Chat-application by Hasan ",
  });
}

module.exports = { getUsers };
