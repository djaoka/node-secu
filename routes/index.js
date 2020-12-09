var express = require('express');
var router = express.Router();

const debug = require('debug')('app:routes');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET info */
router.get('/snort', function(req, res, next) {
  debug('req.ip', req.ip);
  res.json('snort OK');
});

module.exports = router;
