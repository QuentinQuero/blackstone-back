var mongoose = require('mongoose')

const ChallengeSchema  = new mongoose.Schema({
    title: String,
    description: String
})

const Challenge = mongoose.model('challenges', ChallengeSchema)

module.exports = Challenge;
