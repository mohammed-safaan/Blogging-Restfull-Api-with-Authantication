const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
// Env vars
const port = process.env.PORT;
const MongoDBUrl = process.env.MONGOURL;
// Routes
const userRouter = require("./routes/userRouter");
const postRouter = require("./routes/postRouter");
const register = require("./routes/register");
const login = require("./routes/login");
// Logging 
const fs = require("fs");
const morgan = require("morgan");
const path = require("path");

// Auth Middelware
const auth = require("./middelware/auth");

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  {
    flags: "a",
  }
);

// setup the logger
app.use(morgan("combined", { stream: accessLogStream }));
app.use(express.json());
app.post("/home", auth, (req, res) => {
  return res.status(200).send(" Welcome Home ");
});
app.use("/register", register);
app.use("/login", login);
app.use(["/user", "/users"], userRouter);
app.use(["/post", "/posts"], postRouter);

mongoose.connect(MongoDBUrl, (err) => {
  if (!err) return console.log("database connected");
  console.log(err);
});
app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
