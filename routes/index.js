var express = require('express');
var router = express.Router();
var myLog = require('./log_temp');

var mylog, clog;

/* GET home page. */
router.get('/', function(req, res, next) {
  mylog = new myLog;
  clog = {
    "url": "/"
  }
  mylog.setValue = clog;
  mylog.cLog;
  res.render('index', { title: 'RDT execution test' });
});

module.exports = router;
