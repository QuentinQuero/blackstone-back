var express = require('express');
var router = express.Router();

var challengeController = require('../controllers/challenge.controllers')


router.get('/', function(req, res, next) {
  challengeController.getChallenge(req, res).then(function (){
    res.send();
  })
});

router.post('/', function(req, res, next) {
  challengeController.createChallenge(req, res).then(function (){
    res.send();
  })
});

module.exports = router;
