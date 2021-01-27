const Map = require("../models/combatmapsModel");

exports.getCombatMaps = async function () {

    try {
        return await Map.find();
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
    newMap.name = map.name;
    newMap.image = map.image;
    return await newMap.save();
}
