const express = require("express");
const router = express.Router();

const { getLogin } = require("../controller/loginController");

router.get("/", getLogin);

module.exports = router;
