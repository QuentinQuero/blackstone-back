var CharacterService = require('../services/character.service')

exports.getCharacter = async function (req, res, next) {
    try {
        var users = await CharacterService.getCharacter()
        return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.createCharacter = async function (req, res, next) {
    try {
        await CharacterService.createCharacter(req.body);

        var users = await CharacterService.getCharacter()
        return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
