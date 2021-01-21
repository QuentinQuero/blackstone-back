let ChallengeService = require('../services/challenge.service')

exports.getChallenges = async function (req, res) {
    try {
        let challenges = await ChallengeService.getChallenges()
        res.status(200).json({ status: 200, data: challenges, message: "Successfully Challenges search" });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getChallengeById = async function (req, res) {
    try {
        let challenge = await ChallengeService.getChallengeById(req.params.id)
        res.status(200).json({ status: 200, data: challenge, message: "Successfully Challenge Search" });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }
}

exports.createChallenge = async function (req, res) {
    try {
        let challenge = await ChallengeService.createChallenge(req.body);
        res.status(200).json({ status: 200, data: challenge, message: "Successfully Challenge Created"  });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }
}

exports.updateChallenge = async function (req, res) {
    try {
        let challengeUpdated = await ChallengeService.updateChallenge(req.body);
        res.status(200).json({ status: 200, data: challengeUpdated, message: "Successfully Challenges Updated"  });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }
}

exports.deleteChallengeById = async function (req, res) {
    try {
        let challenge = await ChallengeService.deleteChallengeById(req.params.id)
        res.status(200).json({ status: 200, data: challenge, message: "Successfully Challenge Deleted" });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }
}