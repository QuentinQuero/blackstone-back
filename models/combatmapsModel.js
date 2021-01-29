var mongoose = require('mongoose')

const CombatMapsSchema  = new mongoose.Schema({
    name: String,
    image: String,
    hostileNumber: Number,
    re
})

const Map = mongoose.model('maps', CombatMapsSchema)

module.exports = Map;
