function getInbox(req, res, next) {
  res.render("inbox", {
    title: "inbox-application",
  });
}

module.exports = { getInbox };
