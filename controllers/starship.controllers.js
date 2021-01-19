var StarshipService = require('../services/starship.service')

exports.getStarship = async function (req, res) {

    try {
        let ships = await StarshipService.getStarship()
        res.status(200).json({ status: 200, data: ships, message: "Successfully Ships Retrieved" });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }

}

exports.createStarship = async function (req, res) {
    try {
        await StarshipService.createStarship(req.body);

        let ships = await StarshipService.getStarship()

        res.statusCode = 200;

        res.json = { status: 200, data: ships, message: "Successfully Ships Retrieved" };
        return res;
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
