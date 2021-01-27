var express = require('express');
var router = express.Router();

var starshipController = require('../controllers/starship.controllers')

/* GET all starship. */
router.get('/', function(req, res, next) {
    starshipController.getStarship(req, res)
});

/* GET starships by id. */
router.get('/:id', function(req, res, next) {
    starshipController.getStarshipById(req, res)
});

/* POST new starship. */
router.post('/', function(req, res, next) {
    starshipController.createStarship(req, res)
});

/* POST new starship. */
router.put('/:id', function(req, res, next) {
    starshipController.updateStarship(req, res)
});

router.delete('/:id', function(req, res, next) {
    starshipController.deleteStarshipById(req, res)
});


module.exports = router;
