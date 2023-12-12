const cors = require("cors");
const http = require("http");

const readlineSync = require("readline-sync");
require("dotenv").config();
const Text = require("./routes/Text");

// EXPRESS ROUTES
const express = require("express");
// const bodyParser = require("body-parser");
const app = express();
// create application/json parser
// var jsonParser = bodyParser.json();
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "https://tanujbhatt.in",
    origin: ["https://tanujbhatt.in", "https://www.google.com/"],
    origin: "*",
    allowedHeaders: "X-Requested-With, Content-Type, Authorization",
    methods: "GET, POST, PATCH, PUT, POST, DELETE, OPTIONS",
  })
);

app.use(express.json());

app.use("/text", Text);

app.listen(process.env.PORT || 8000, () => {
  "Server connected successfully";
});
