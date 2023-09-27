
const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
// import Router file
const pageRouter = require('./routers/index');

const app = express();
const http = require("http").Server(app);
dotenv.config({ path: './config.env' });

//For set layouts of html view
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Define All Route 
pageRouter(app);

// DB connection
const DB = process.env.DATABASE_LOCAL.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log('DB connection successful!'));

http.listen(3000, function () {
  console.log('listening on *:3000');
});
