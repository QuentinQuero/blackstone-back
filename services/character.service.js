const Character = require("../models/characterModel");

exports.getCharacter = async function (query, page, limit) {

    try {
        return await Character.find(query);
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Character')
    }
}

exports.createCharacter = async function (character) {
        let newChar = new Character();
        newChar.name = 'toto';
        newChar.life = 4;
        return await newChar.save();
}
