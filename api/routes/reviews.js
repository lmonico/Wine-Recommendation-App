'use strict';

var express = require('express');
var mongoose = require('mongoose');
var Int32 = require('mongoose-int32');
var autoIncremnet = require('mongoose-auto-increment');
var router = express.Router();

// Connect to Mongo using Mongoose.
mongoose.connect('mongodb://localhost/big-wine', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connectionerror: '));
db.once('open', function() {
  autoIncremnet.initialize(db);

  var reviewSchema = new mongoose.Schema({
    country: String,
    description: String,
    designation: String,
    points: Int32,
    price: String,
    province: String,
    region_1: String,
    region_2: String,
    taster_name: String,
    taster_twitter_handle: String,
    title: String,
    variety: String,
    winery: String
  });

  reviewSchema.index({'$**': 'text'});
  
  reviewSchema.plugin(autoIncremnet.plugin, {
    model: 'Reveiw',
    field: '_id',
    startAt: 129972
  });
  var Review = mongoose.model('Review', reviewSchema);
  

  // Error no id
  router.get('/', function(req, res, next) {
      res.status(400).send('Please specify a reveiw id.');
  });
  
  router.get('/search/', function(req, res, next) {
    var searchBody = req.body.search_text;
    var found = Review.find( {$text: {$search: `\"${searchBody}\"`}}, function(err, docs) {
      if (err) return console.error(err);
      res.send(docs);
    });
  });

  // GET wine review
  router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    Review.findById(id, function (err, review) {
        if (err) return console.error(err);
        res.send(review);
    });
  });

  router.delete('/:id', function(req, res, next) {
    var id = req.params.id;
    Review.findByIdAndDelete(id, function(err, review) {
        if (err) return console.error(err);
        res.send(`Deleted review: ${review}`);
    });
  });
});

module.exports = router;
