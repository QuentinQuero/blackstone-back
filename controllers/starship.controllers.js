var StarshipService = require('../services/starship.service')

exports.getStarship = async function (req, res) {

    try {
        let ships = await StarshipService.getStarship()
        res.status(200).json({ status: 200, data: ships, message: "Successfully Starships Find" });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }

}

exports.getStarshipById = async function (req, res) {

    try {
        let ships = await StarshipService.getStarshipById(req.params.id)
        res.status(200).json({ status: 200, data: ships, message: "Successfully Starship Find" });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }

}


exports.createStarship = async function (req, res) {
    try {
        await StarshipService.createStarship(req.body);

        let ships = await StarshipService.getStarship()

        res.statusCode = 200;

        res.json = { status: 200, data: ships, message: "Successfully Starship Created" };
        return res;
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}


exports.deleteStarshipById = async function (req, res) {

    try {
        let ships = await StarshipService.deleteStarshipById(req.params.id)
        res.status(200).json({ status: 200, data: ships, message: "Successfully Starship Deleted" });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }

}