var express = require('express');
var router = express.Router();

var starshipController = require('../controllers/starship.controllers')

/* GET all starship. */
router.get('/', function(req, res, next) {
    starshipController.getStarship(req, res).then(function (){
        res.send();
    })
});

/* GET starships by id. */
router.get('/:id', function(req, res, next) {
    starshipController.getStarshipById(req, res).then(function (){
        res.send();
    })
});

/* POST new starship. */
router.post('/', function(req, res, next) {
    starshipController.createStarship(req, res).then(function () {
        res.send();
    })
});

/* POST new starship. */
router.put('/:id', function(req, res, next) {
    starshipController.updateStarship(req, res).then(function () {
        res.send();
    })
});

router.delete('/:id', function(req, res, next) {
    starshipController.deleteStarshipById(req, res).then(function (){
        res.send();
    })
});


module.exports = router;
