const Challenge = require("../models/challengeModel");

exports.getChallenge = async function (query, page, limit) {

    try {
        return await Challenge.find(query);
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Challenge')
    }
}

exports.createChallenge = async function () {
        let newChallenge = new Challenge();
        newChallenge.title = 'titi';
        newChallenge.description = 'Bla bla bla bla bla bla';
        return await newChallenge.save();
}
