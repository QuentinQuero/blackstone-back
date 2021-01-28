var mongoose = require('mongoose')

const CharacterSchema  = new mongoose.Schema({
    name: String,
    life: Number,
    movement: Number,
    defense: String,
    defense_exalte: String,
    agility: String,
    agility_exalte: String,
    vitality: String,
    vitality_exalte: String,
    capacity: [{ attack: String, range: [{"1": String,"2-3": String,"4+": String}]}],
    capacity_exalte: [{ attack: String, range: [{"1": String,"2-3": String,"4+": String}]}],
    specialAttack: String,
    specialAttack_exalte: String,
    uniqueattack: [{ name: String, description: String }],
    uniqueattack_exalte: [{ name: String, description: String }],
    specialRole: [{name: String, description: String}],
    specialRole_exalte: [{name: String, description: String}],
    exalte: [{possible: Boolean, description: String}],
    image: String,
    vaisseau_id: String,
})

const Character = mongoose.model('characters', CharacterSchema)

module.exports = Character;