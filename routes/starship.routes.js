var express = require('express');
var router = express.Router();

var starshipController = require('../controllers/starship.controllers')

/* GET users listing. */
router.get('/', function(req, res, next) {
    starshipController.getStarship(req, res).then(function (){
        res.send();
    })
});

/* GET users listing. */
router.post('/', function(req, res, next) {
    starshipController.createStarship(req, res).then(function () {
        res.send();
    })
});

module.exports = router;
