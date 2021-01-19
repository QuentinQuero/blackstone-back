const Starship = require("../models/starshipModel");

exports.getStarship = async function (query, page, limit) {

    try {
        return await Starship.find(query);
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Character')
    }
}

exports.createStarship = async function (starship) {
        let newShip = new Starship();
        newShip.name = 'Star Destroyer';
        newShip.life = 15;
        newShip.damage = 150;
        return await newShip.save();
}