var express = require('express');
var router = express.Router();
var db  = require('../public/javascripts/dbFunctions.js');

/* GET home page. */

router.post('/save', function(req, res, next) {
  console.log(req.body);
  db.insert(req.body);
  res.send("Ok");
});
router.post('/delete', function(req, res, next) {
  console.log(req.body);
  db.delete(req.body);
  res.send("Ok");
});
router.post('/find', function(req, res, next) {
  console.log(req.body);
  db.find(req.body);
  res.send("Ok");
});

module.exports = router;

