var express = require('express');
var router = express.Router();

var characterController = require('../controllers/character.controllers')

/* GET users . */
router.get('/', function(req, res, next) {
  characterController.getCharacter(req, res);
});

router.get('/:id', function(req, res, next) {
  characterController.getCharacterById(req, res);
});

router.delete('/:id', function(req, res, next) {
  characterController.DeleteCharacter(req, res)
});
/*
router.put('/:id', function(req, res, next) {
  characterController.UpdateCharacter(req, res).then(function (){
    res.send();
  })
});
*/

/* Create user. */
router.post('/', function(req, res, next) {
  characterController.createCharacter(req, res)
});

module.exports = router;
