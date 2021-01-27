var express = require('express');
var router = express.Router();

var combatmapsController = require('../controllers/combatmaps.controllers')

/* GET maps listing. */
router.get('/', function(req, res, next) {
    combatmapsController.getCombatMaps(req,res)
});
/* GET maps by id. */
router.get('/:id', function(req, res, next) {
    combatmapsController.getCombatMapById(req,res)
});
/* DELETE maps by id. */
router.delete('/:id', function(req, res, next) {
    combatmapsController.deleteCombatMapById(req,res)
});

router.post('/', function(req, res, next) {
    combatmapsController.createCombatMap(req,res)
});


module.exports = router;
