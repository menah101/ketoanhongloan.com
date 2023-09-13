
const express = require("express");
const path = require('path');
// import Router file
const pageRouter = require('./routers/index');

const app = express();
const http = require("http").Server(app);

//For set layouts of html view
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Define All Route 
pageRouter(app);

http.listen(3000, function () {
  console.log('listening on *:3000');
});
