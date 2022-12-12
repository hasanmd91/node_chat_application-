const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

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

app.use(cookieParser(process.env.COOKIE_SECRET));

//rounting setup

app.listen(process.env.PORT, () => console.log("server is running "));
