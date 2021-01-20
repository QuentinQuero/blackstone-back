const Map = require("../models/combatmapsModel");

exports.getCombatMaps = async function (query, page, limit) {

    try {
        return await Map.find(query);
    } catch (e) {
        // Log Errors
        throw Error('No maps in database')
    }
}
exports.getCombatMapById = async function (id) {

    try {
        return await Map.findById(id);
    } catch (e) {
        // Log Errors
        throw Error('Map not found')
    }
}
exports.deleteCombatMapById = async function (id) {

    try {
       return Map.deleteOne({_id: id});
    } catch (e) {
        // Log Errors
        throw Error('Error while deleting map')
    }
}

exports.createCombatMap = async function (map) {
    let newMap = new Map();
    newMap.name = 'neant';
    newMap.image = '/images/maps/thwmjqY.jpg';
    return await newMap.save();
}