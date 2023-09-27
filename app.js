const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = require('./config');
const http = require("http").Server(app);
dotenv.config({ path: './config.env' });

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
