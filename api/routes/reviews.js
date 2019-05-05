'use strict';

var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

mongoose.connect('mongodb://localhost/big-wine');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connectionerror: '));
db.once('open', function() {
    console.log('Connected');
})

// Error on no id
router.get('/', function(req, res, next) {
  res.status(404).send('Error: Please specify wine.');
});

// Get wine review
router.get('/:id', function(req, res, next) {
    res.send(req.params.id);
});

module.exports = router;
