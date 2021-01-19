var CombatMapsService = require('../services/combatmaps.service')

exports.getCombatMap = async function (req, res) {
    try {
        let maps = await CombatMapsService.getCombatMap()
        res.status(200).json({ status: 200, data: maps, message: "Successfully Maps Retrieved" });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }
}

exports.createCombatMap = async function (req, res) {
    try {
        await CombatMapsService.createCombatMap(req.body);

        let maps = await CombatMapsService.getCombatMap()
        res.statusCode =200;
        res.json = { status: 200, data: maps, message: "Successfully Maps Retrieved" };
        return res;
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
