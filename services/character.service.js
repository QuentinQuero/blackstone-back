const Character = require("../models/characterModel");

exports.getCharacter = async function () {

    try {
        return await Character.find();
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Character')
    }
}

exports.createCharacter = async function (character) {
    try {
        let newChar = new Character();
        Object.assign(newChar,character);
        return await newChar.save();
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Character')
    }
}

exports.getCharacterByID = async function (id) {
    try {
        return await Character.findById(id);
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Character')
    }
}

exports.deleteCharacter = async function (id) {
    try {
        return await Character.deleteOne({_id : id});
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Character')
    }
}

exports.updateCharacter = async function (character,id) {
    try {
        return Character.updateOne({_id : id}, character);
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Character')
    }
}