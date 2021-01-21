var CharacterService = require('../services/character.service')

exports.getCharacter = async function (req, res) {
    try {
        let users = await CharacterService.getCharacter()
        res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getCharacterById = async function (req, res) {
    try {
        let users = await CharacterService.getCharacterByID(req.params.id)
        res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }
}

exports.DeleteCharacter = async function (req, res) {
    try {
        await CharacterService.deleteCharacter(req.params.id);

        let users = await CharacterService.getCharacter()

        res.statusCode = 200;
        res.json = { status: 200, data: users, message: "Succesfully Users Retrieved" };
        return res;
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.UpdateCharacter = async function (req, res) {
    try {
        await CharacterService.updateCharacter(req.body,req.params.id);

        let users = await CharacterService.getCharacter()

        res.statusCode = 200;
        res.json = { status: 200, data: users, message: "Succesfully Users Retrieved" };
        return res;
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.createCharacter = async function (req, res) {
    try {
        await CharacterService.createCharacter(req.body);

        let users = await CharacterService.getCharacter()

        res.statusCode = 200;
        res.json = { status: 200, data: users, message: "Succesfully Users Retrieved" };
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }
}
