var CombatMapsService = require('../services/combatmaps.service')

exports.getCombatMaps = async function (req, res) {
    try {
        let maps = await CombatMapsService.getCombatMaps()
        res.status(200).json({ status: 200, data: maps, message: "Successfully Maps Retrieved" });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }
}
exports.getCombatMapById = async function (req, res) {
    try {
        let maps = await CombatMapsService.getCombatMapById(req.params.id)
        res.status(200).json({ status: 200, data: maps, message: "Successfully Map Retrieved" });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }
}
exports.deleteCombatMapById = async function (req, res) {
    try {
        let maps = await CombatMapsService.deleteCombatMapById(req.params.id)
        res.status(200).json({ status: 200, data: maps, message: "Successfully Map Deleted" });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }
}

exports.createCombatMap = async function (req, res) {
    try {
        await CombatMapsService.createCombatMap(req.body);

        let maps = await CombatMapsService.getCombatMaps()
        res.statusCode =200;
        res.json = { status: 200, data: maps, message: "Successfully Map Retrieved" };
        return res;
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
