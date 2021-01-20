var express = require('express');
var router = express.Router();

var combatmapsController = require('../controllers/combatmaps.controllers')

/* GET maps listing. */
router.get('/', function(req, res, next) {
    combatmapsController.getCombatMaps(req,res).then(function(){
        res.send();
    })
});
/* GET maps by id. */
router.get('/:id', function(req, res, next) {
    combatmapsController.getCombatMapById(req,res).then(function(){
        res.send();
    })
});
/* DELETE maps by id. */
router.delete('/:id', function(req, res, next) {
    combatmapsController.deleteCombatMapById(req,res).then(function(){
        res.send();
    })
});

router.post('/', function(req, res, next) {
    combatmapsController.createCombatMap(req,res).then(function(){
        res.send();
    })
});


module.exports = router;
