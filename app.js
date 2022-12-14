// external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

//internal imports
const loginRouter = require("./router/loginRouter");
const userRouter = require("./router/userRouter");
const inboxRouter = require("./router/inboxRouter");
const {
  notFoundHandeler,
  erroHandeler,
} = require("./middlewares/common/errorHandeler");

const app = express();
dotenv.config();

//database connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4, // connection error problem solves
  })
  .then(() => console.log(" database connection succesfull"))
  .catch((err) => console.log(err));

// request perser

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //check

// set view engine

app.set("view engine", "ejs");

// set static folder

app.use(express.static(path.join(__dirname, "public")));

// parse cookies
//wordpress salt genretor sha1 algo = COOKIE_SECRET

app.use(cookieParser(process.env.COOKIE_SECRET));

//rounting setup

app.use("/", loginRouter);
app.use("/users", userRouter);
app.use("/inbox", inboxRouter);

// 404 not found handeler

app.use(notFoundHandeler);

// commo error handeler
app.use(erroHandeler);

app.listen(process.env.PORT, () => console.log("server is running "));
