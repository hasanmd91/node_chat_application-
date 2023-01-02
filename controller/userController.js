function getUsers(req, res, next) {
  res.render("users", {
    title: "Users-Chat application",
  });
}

module.exports = { getUsers };
