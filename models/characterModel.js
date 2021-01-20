var mongoose = require('mongoose')

const CharacterSchema  = new mongoose.Schema({
    name: String,
    life: Number,
    movement: Number,
    defense: String,
    agility: String,
    vitality: String,
    capacity: [{ attack: String, range: [{"1": String,"2-3": String,"4+": String}]}],
    specialAttack: String,
    specialRole: [{name: String, description: String}],
    exalte: [{possible: Boolean, description: String}],
    image: String,
    vaisseau_id: String,
})

const Character = mongoose.model('characters', CharacterSchema)

module.exports = Character;