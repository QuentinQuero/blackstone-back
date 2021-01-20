var express = require('express');
var router = express.Router();

var characterController = require('../controllers/character.controllers')

/* GET users listing. */
router.get('/', function(req, res, next) {
  characterController.getCharacter(req, res).then(function (){
    res.send();
  })
});

router.get('/:id', function(req, res, next) {
  characterController.getCharacterById(req, res).then(function (){
    res.send();
  })
});

router.delete('/:id', function(req, res, next) {
  characterController.DeleteCharacter(req, res).then(function (){
    res.send();
  })
});

router.put('/:id', function(req, res, next) {
  characterController.UpdateCharacter(req, res).then(function (){
    res.send();
  })
});

/* GET users listing. */
router.post('/', function(req, res, next) {
  characterController.createCharacter(req, res).then(function (){
    res.send();
  })
});

module.exports = router;
