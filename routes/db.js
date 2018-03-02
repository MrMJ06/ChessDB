var express = require('express');
var router = express.Router();
var db  = require('../public/javascripts/dbFunctions.js');

/* GET home page. */

router.post('/save', function(req, res, next) {

  console.log(JSON.parse(Object.keys(req.body)[0]));
  db.insert(JSON.parse(Object.keys(req.body)[0]));
  res.send("Ok");
});
router.post('/delete', function(req, res, next) {
  console.log(JSON.parse(Object.keys(req.body)[0]));
  db.delete(JSON.parse(Object.keys(req.body)[0]));
  res.send("Ok");
});
router.post('/find', function(req, res, next) {
  console.log(JSON.parse(Object.keys(req.body)[0]));
  db.find(JSON.parse(Object.keys(req.body)[0]));
  res.send("Ok");
});

module.exports = router;

