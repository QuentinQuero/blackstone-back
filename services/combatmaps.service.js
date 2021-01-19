const Map = require("../models/combatmapsModel");

exports.getCombatMap = async function (query, page, limit) {

    try {
        return await Map.find(query);
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Map')
    }
}

exports.createCombatMap = async function (map) {
    let newMap = new Map();
    newMap.name = 'Ambush!';
    newMap.image = '/images/maps/BlackstoneBattle-Nov17-AmbushCard10rf.jpg';
    return await newMap.save();
}