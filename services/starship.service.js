const Starship = require("../models/starshipModel");

exports.getStarship = async function (query, page, limit) {

    try {
        return await Starship.find(query);
    } catch (e) {
        // Log Errors
        throw Error('Error:Starships does not exist')
    }
}

exports.getStarshipById = async function (id) {

    try {
        return await Starship.findById(id);
    } catch (e) {
        // Log Errors
        throw Error('Error:Starships does not exist')
    }
}

exports.createStarship = async function (starship) {
        let newShip = new Starship();
        Object.assign(newShip,starship);
        return await newShip.save();
}

exports.updateStarship = async function (starship, id) {

        return await Starship.updateOne({_id:id}, starship);
}

exports.deleteStarshipById = async function (id) {

    try {
        return  Starship.deleteOne({_id:id});
    } catch (e) {
        // Log Errors
        throw Error('Starship was not deleted')
    }
}

