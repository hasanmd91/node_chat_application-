function getInbox(req, res, next) {
  res.render("inbox", {
    title: "inbox-Chat-application by Hasan ",
  });
}

module.exports = { getInbox };
