var mongoose = require('mongoose')

const StarshipSchema  = new mongoose.Schema({
    name: String,
    appui: String,
    instalations: String,
    explorateur: String,
    image: String
})

const Starship = mongoose.model('starships', StarshipSchema)

module.exports = Starship;
