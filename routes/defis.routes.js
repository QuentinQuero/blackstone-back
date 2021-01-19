var express = require('express');
var router = express.Router();

var defiController = require('../controllers/defi.controllers')

router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send(defiController.getDefi(req));
});

router.post('/', function(req, res, next) {
  res.send(defiController.createDefi(req));
});

module.exports = router;
