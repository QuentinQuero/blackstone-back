const Challenge = require("../models/challengeModel");

exports.getChallenges = async function (query) {
    try {
        return await Challenge.find(query);
    } catch (e) {
        throw Error('Error while Paginating Challenges')
    }
}

exports.getChallengeById = async function (id) {
    try {
        return await Challenge.findById(id);
    } catch (e) {
        throw Error('Challenge not found')
    }
}

exports.createChallenge = async function (challenge) {
    try {
        let newChallenge = new Challenge();
        newChallenge.title = challenge.title;
        newChallenge.description = challenge.description;
        return await newChallenge.save();
    } catch (e) {
        throw Error('Challenge not created')
    }
}

exports.updateChallenge = async function (challenge) {
    try {
        let challengeToUpdate = await this.getChallengeById(challenge._id);
        return await Challenge.updateOne({_id: challengeToUpdate._id}, {title: challenge.title});
    } catch (e) {
        throw Error('Challenge not updated')
    }
}

exports.deleteChallengeById = async function (id) {
    try {
        return Challenge.deleteOne({_id: id});
    } catch (e) {
        throw Error('Challenge not deleted')
    }
}