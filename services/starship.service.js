const Starship = require("../models/starshipModel");

exports.getStarship = async function (query, page, limit) {

    try {
        return await Starship.find(query);
    } catch (e) {
        // Log Errors
        throw Error('Error:Starships does not exist')
    }
}

exports.getStarshipById = async function (id) {

    try {
        return await Starship.findById(id);
    } catch (e) {
        // Log Errors
        throw Error('Error:Starships does not exist')
    }
}

exports.createStarship = async function (starship) {
        let newShip = new Starship();
        newShip.name = 'CLARION';
        newShip.explorateur = 'Taddeus la Purificateur and Pious Vorne';
        newShip.appui = 'Laudaphones à Infrasons: Une fois par expédition, au début de l\'étape de maneuvres de la phase d\'initiative, le chef peut utiliser les laudaphones à infrasons du Clarion. S\'il le fait, chaque explorateur peut effectuer une manæuvre sans avoir à dépenser un dé d\'activation à cette étape de maneuvre.';
        newShip.instalations = 'Salle de Torture: Jetez le dé de Sombreroche. Vous pouvez relancer le dé si l\'explorateur qui utilise cette installation est Taddeus the Purifier ou Pious Vorne. Sur 1, l\'explorateur doit défausser une carte Indice s\'il en a une. Sur 2-15, rien ne se passe. Sur 16+, il reçoit une carte Indice.';
        return await newShip.save();
}

exports.deleteStarshipById = async function (id) {

    try {
        return  Starship.deleteOne({_id:id});
    } catch (e) {
        // Log Errors
        throw Error('Starship was not deleted')
    }
}