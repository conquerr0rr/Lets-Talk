var mongoose = require('mongoose');

var Create = mongoose.Schema({
  heading: String,
  content: String,
  date: Date,
  time: String,
});

module.exports = mongoose.model('Create', Create);
