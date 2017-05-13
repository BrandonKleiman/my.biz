const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.load();

const db = mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds139781.mlab.com:39781/mybiz`, null, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Database Connection: Success');
  }
});

module.exports = db;
