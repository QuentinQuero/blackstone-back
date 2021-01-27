var express = require('express');
var router = express.Router();

var challengeController = require('../controllers/challenge.controllers')

//GetAll
router.get('/', function(req, res, next) {
  challengeController.getChallenges(req, res);
});

//GetById
router.get('/:id', function(req, res) {
  challengeController.getChallengeById(req, res)
});

//Post
router.post('/', function(req, res) {
  challengeController.createChallenge(req, res)
});

//UpdateById
router.put('/', function(req, res) {
  challengeController.updateChallenge(req, res)
});

//DeleteById
router.delete('/:id', function(req, res) {
  challengeController.deleteChallengeById(req, res)
});

module.exports = router;
