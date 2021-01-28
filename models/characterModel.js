var mongoose = require('mongoose')

const CharacterSchema  = new mongoose.Schema({
    classic: {
          name: String,
          life: String,
          movement: String,
          defense: String,
          agility: String,
          vitality: String,
          capacity: [{ attack: String, range: [{un: String,deuxtrois: String,quatreplus: String}]}],
          specialAttack: String,
          uniqueattack: [{ name: String, description: String }],
          specialRole: [{name: String, description: String}],
          exalte: [{possible: Boolean, description: String}],
          special: String,
          image: String,
          vaisseau_id: String,
    },
    exalte: {
        movement: String,
        defense: String,
        agility: String,
        vitality: String,
        capacity: [{ attack: String, range: [{un: String,deuxtrois: String,quatreplus: String}]}],
        specialAttack: String,
        uniqueattack: [{ name: String, description: String }],
        specialRole: [{name: String, description: String}],
    },
    enemy: {
        name: String,
        blood: Number,
        movement: Number,
        capacity: [{ attack: String, range: [{un: String,deuxtrois: String,quatreplus: String}]}],
        specialAttack: String,
        specialRole: [{name: String, description: String}],
        comportement:[{
            typeofcomportement: String,
            untrois: String,
            quatresix: String,
            septneuf: String,
            dixdouze: String,
            treizequinze: String,
            seizedixneuf: String,
            vinght: String,
        }],
        uniqueattack: [{ name: String, description: String }],
        image: String,
    },
})

const Character = mongoose.model('characters', CharacterSchema)

module.exports = Character;