var mongoose = require('mongoose')

const StarshipSchema  = new mongoose.Schema({
    name: String,
    life: Number,
    damage: Number
})

const Starship = mongoose.model('starships', StarshipSchema)

module.exports = Starship;
