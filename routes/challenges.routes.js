var express = require('express');
var router = express.Router();

var challengeController = require('../controllers/challenge.controllers')

//GetAll
router.get('/', function(req, res, next) {
  challengeController.getChallenges(req, res).then(function (){
    res.send();
  })
});

//GetById
router.get('/:id', function(req, res) {
  challengeController.getChallengeById(req, res).then(function (){
    res.send();
  })
});

//Post
router.post('/', function(req, res) {
  challengeController.createChallenge(req, res).then(function (){
    res.send();
  })
});

//UpdateById
router.put('/', function(req, res) {
  challengeController.updateChallenge(req, res).then(function (){
    res.send();
  })
});

//DeleteById
router.delete('/:id', function(req, res) {
  challengeController.deleteChallengeById(req, res).then(function (){
    res.send();
  })
});

module.exports = router;
