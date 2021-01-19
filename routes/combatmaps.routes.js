var express = require('express');
var router = express.Router();

var combatmapsController = require('../controllers/combatmaps.controllers')

/* GET users listing. */
router.get('/', function(req, res, next) {
    combatmapsController.getCombatMap(req,res).then(function(){
        res.send();
    })
});

router.post('/', function(req, res, next) {
    combatmapsController.createCombatMap(req,res).then(function(){
        res.send();
    })
});


module.exports = router;
