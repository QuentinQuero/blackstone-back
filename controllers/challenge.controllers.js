let ChallengeService = require('../services/challenge.service')

exports.getChallenge = async function (req, res) {
    try {
        let challenges = await ChallengeService.getChallenge()
        res.status(200).json({ status: 200, data: challenges, message: "Succesfully Challenges Retrieved" });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }
}

exports.createChallenge = async function (req, res) {
    try {
        await ChallengeService.createChallenge(req.body);

        let challenges = await ChallengeService.getChallenge()

        //res.statusCode = 200;
        //res.json = { status: 200, data: challenges, message: "Succesfully Challenges Retrieved" };
        res.status(200).json({ status: 200, data: challenges, message: "Succesfully Challenges Retrieved"  });

    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }
}



