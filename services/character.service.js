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

        var array = character.capacity;
        var array1 = character.specialRole;
        var array2 = character.exalte;

        newChar.name = character.name;
        newChar.life = character.life;
        newChar.movement = character.movement;
        newChar.defense = character.defense;
        newChar.agility = character.agility;
        newChar.vitality = character.vitality;

        array.forEach(element =>
        newChar.capacity.push(element)
        );

        newChar.specialAttack = character.specialAttack;

        array1.forEach(element =>
        newChar.specialRole.push(element)
        );

        array2.forEach(element =>
        newChar.exalte.push(element)
        );

        newChar.image = character.image;
        newChar.vaisseau_id = character.vaisseau_id;
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
/*
exports.updateCharacter = async function (character) {
    try {
        let updateCharacter = await Character.findById(character._id);
        updateCharacter.name = character.name;
        updateCharacter.life = character.life;
        updateCharacter.capacity.attack = character.capacity.attack;
        updateCharacter.specialAttack = character.specialAttack;
        updateCharacter.specialRole.name = character.specialRole.name;
        updateCharacter.specialRole.description =character.specialRole.description;
        updateCharacter.exalte.possible = character.exalte.possible;
        updateCharacter.exalte.description = character.exalte.description;
        return Character.updateOne({_id : character._id}, updateCharacter);
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Character')
    }
}
*/