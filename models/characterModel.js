var mongoose = require('mongoose')

const CharacterSchema  = new mongoose.Schema({
    name: String,
    life: Number,
    capacity: [{ attack: String }],
    specialAttack: String,
    specialRole: [{name: String, description: String}],
    exalte: [{possible: Boolean, description: String}]

})



const Character = mongoose.model('characters', CharacterSchema)

module.exports = Character;