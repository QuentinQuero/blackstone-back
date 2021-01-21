var express = require('express');
var router = express.Router();

var characterController = require('../controllers/character.controllers')

/* GET users listing. */
router.get('/', function(req, res, next) {
  characterController.getCharacter(req, res).then(function (){
    res.send();
  })
});

router.post('/', function(req, res, next) {
  characterController.createCharacter(req, res).then(function (){
    res.send();
  })
});

module.exports = router;
