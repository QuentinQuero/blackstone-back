var mongoose = require('mongoose')

const CharacterSchema  = new mongoose.Schema({
    name: String,
    life: Number
})

const Character = mongoose.model('characters', CharacterSchema)

module.exports = Character;
