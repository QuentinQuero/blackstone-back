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
        newChar.name = 'Janus Draik';
        newChar.life = 4;
        newChar.capacity = [{
            attack: "Pistolet & Rapière (1 +)"
        },{
            attack: "Pluie de coups (4 +/6 +)"
        }];
        newChar.specialAttack = "Lorsqu'il effectue l'action d'arme Pluie de coups, Janus Draik peut attaquer " +
            "deux fois pour un coût de (4 +) ou trois fois pour un coût de (6 +). Résolvez chaque attaque l'une" +
            " après l'autre. La cible choisie pour la deuxième et la troisième attaque doit être soit la même cible" +
            "que l'attaque précédente, soit une cible sur la même case ou sur une case adjacente à la cible de l'attaque" +
            "précédente.";
        newChar.specialRole = [{
            name: "Stratège",
            description:"Lors du premier tour de combat, Janus Draik peut effectuer une manoeuvre sans dépenser" +
                "de dé d'activation."
        },{
            name: "Duelliste",
            description:"Si un jet de défense de Janus Draik est une réussite critique et que l'attaquant est sur une " +
                "case adjacente, Janus peut effectuer immédiatement une action d'arme Pistolet & Rapière sans dépenser " +
                "de dé d'activation."
        }];
        newChar.exalte = [{
            possible: true,
            description: "Avoir la carte Découverte Chronomètre Empyrique. Si Janus Draik possède cette carte " +
                "au début d'une expédition, il commence l'expédition Exalté."
        }]
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

exports.updateCharacter = async function (id) {
    try {
        let updateCharacter = await Character.findById(id);
        updateCharacter.name = "Janus Draik";
        return Character.updateOne({_id : id}, updateCharacter);
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Character')
    }
}