//node packages that uses in this file
//import all the packages
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//Connect Database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Database is now connected");
  });

//create a port to run backend server
const port = process.env.PORT || 8000;

//create app to listen all the routes and request
app.listen(port, () => {
  console.log(`App is running at port ${port}`);
});
