var express = require('express');
var router = express.Router();

var characterController = require('../controllers/character.controllers')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(characterController.getCharacter(req));
});

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send(characterController.createCharacter(req));
});

module.exports = router;
