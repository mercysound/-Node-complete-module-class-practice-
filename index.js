// import
const express = require("express");
const app = express();
const ejs = require("ejs");
app.set("view engine", "ejs");
const todoRouter = require("./router/todo.route");
require("dotenv").config();
require("./mongo-connection/mongoose_connection");
const studentRouter = require("./router/student.route");
// VAR DECLARATION
let PORT = process.env.PORT || 4000;

// middleware
const cors = require("cors");
app.use(cors()) // It allow to connect from any different origin req coming from
// app.set("*","cors") // this help allow all routing
app.use(express.urlencoded({ extended: true })); // this helps to split multiple detail coming from FE into req body
app.use(express.json()); // this help convert the details from FE to json
app.use("/student", studentRouter);
app.use("/", todoRouter);

app.listen(PORT, () => {
  console.log("App is listing @ port: " +PORT);
});

