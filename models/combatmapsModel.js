var mongoose = require('mongoose')

const CombatMapsSchema  = new mongoose.Schema({
    name: String,
    image: String
})

const Map = mongoose.model('maps', CombatMapsSchema)

module.exports = Map;
