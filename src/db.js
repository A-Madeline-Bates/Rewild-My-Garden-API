console.log("in db.js");

//This file is used to establish our database
require('dotenv/config') // require the dotenv/config at beginning of file
const mongoose = require('mongoose');

const {
  DATABASE_URL
} = process.env;

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

const url = `${DATABASE_URL}`;

console.log("in db.js past DB read");

mongoose.connect(url, options).then(function () {
  console.log('MongoDB is connected');
})
  .catch(function (err) {
    console.log(err);
});