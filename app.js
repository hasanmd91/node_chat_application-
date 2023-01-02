// external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

//internal imports

const {
  notfoundHandeler,
  errorHandelr,
} = require("./middlewares/common/errorHandeler");

const loginRouter = require("./Router/loginRouter");
const usersRouter = require("./Router/usersRouter");
const inboxRouter = require("./Router/inboxRouter");

const app = express();
dotenv.config();

// database connection

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4, // connection error problem solves
  })
  .then(() => console.log(" database connection sucessfull"))
  .catch((err) => console.log(err));

// request parser

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine

app.set("view engine", "ejs");

// set static folder

app.use(express.static(path.join(__dirname, "public")));

//parse cookies

app.use(cookieParser(process.env.COOKIE_SECREAT));

// routing setup

app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

// 404 not found handeler

app.use(notfoundHandeler);

//common error handelr

app.use(errorHandelr);

app.listen(process.env.PORT, () => {
  console.log(`app is listening to ${process.env.PORT}`);
});
