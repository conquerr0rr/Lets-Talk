var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Create = require('../models/Create.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'});
});

// Create Operation
router.post('/create', async (req, res) => {
  await new Create({
    heading: req.body.heading,
    date: Date.now(),
    content: req.body.content,
    time: req.body.time,
  }).save((err, Create) => {
    if (err) {
      console.log(err);
    } else {
      res.json('data sent successfully');
    }
  });
});

// Read operation
router.get('/read', async (req, res) => {
  try {
    var ReadData = await Create.find();
    console.log(ReadData);
    res.json(ReadData);
  } catch (err) {
    console.log(err);
  }
});

// Delete operation
router.delete('/delete/:id', async (req, res) => {
  try {
    await Create.findOneAndDelete();
    console.log('successfully deleted data');
  } catch (err) {
    console.log(err);
  }
});

// Update Operation
router.patch('/patch/:id', async (req, res) => {
  try {
    Create.find();
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
